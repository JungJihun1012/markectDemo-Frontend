const ANTHROPIC_API_KEY = "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" as string;

interface AnthropicResponse {
  completion: string;
}

export async function sendMessageToAnthropic(messages: string[]): Promise<string> {
  const prompt = messages
    .map((msg, i) => (i % 2 === 0 ? `\n\nHuman: ${msg}` : `\n\nAssistant: ${msg}`))
    .join('') + '\n\nAssistant:';

  const response = await fetch('https://api.anthropic.com/v1/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
    },
    body: JSON.stringify({
      model: 'claude-v1',
      prompt,
      max_tokens_to_sample: 1000,
      stop_sequences: ['\n\nHuman:'],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error('Anthropic API 오류');
  }

  const data: AnthropicResponse = await response.json();
  return data.completion.trim();
}
