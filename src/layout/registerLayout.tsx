import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { sendMessageToAnthropic } from '../api/anthropicAPI';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

const initialSystemMessage = `당신은 회원가입 도우미 AI입니다.  
사용자와 대화하며 아이디, 이름, 비밀번호, 이메일을 순서대로 받고,  
입력값을 검증해 주세요.  
중복 아이디는 'testuser'로 가정하여 중복이라고 알려주세요.  
각 항목에서 오류가 있으면 알려주고 다시 요청하세요.  
모든 정보가 올바르면 "회원가입이 완료되었습니다!"라고 알려주세요.`;

const ChatRegister: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', content: initialSystemMessage },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 대화 기록을 Anthropic API용 문자열 배열로 변환 (사용자, AI 메시지 순서대로)
      const anthroMessages = messages
        .map(m => m.content)
        .concat(userMessage.content);

      const aiResponse = await sendMessageToAnthropic(anthroMessages);

      const aiMessage: ChatMessage = { role: 'ai', content: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'ai', content: '오류가 발생했습니다. 다시 시도해 주세요.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>회원가입 AI 채팅</h2>
      <div
        style={{
          height: 400,
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: '#fafafa',
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: 12,
              textAlign: msg.role === 'user' ? 'right' : 'left',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '8px 12px',
                borderRadius: 16,
                backgroundColor: msg.role === 'user' ? '#007bff' : '#e5e5ea',
                color: msg.role === 'user' ? 'white' : 'black',
                whiteSpace: 'pre-wrap',
                maxWidth: '80%',
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder="메시지를 입력하세요..."
          style={{ flexGrow: 1, padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          style={{
            marginLeft: 8,
            padding: '8px 16px',
            fontSize: 16,
            borderRadius: 4,
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? '전송 중...' : '전송'}
        </button>
      </form>
    </div>
  );
};

export default ChatRegister;
