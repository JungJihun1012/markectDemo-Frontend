import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { RegisterContent, RegsiterContainer } from '../styles/style.css';

const initialSystemMessage = `당신은 회원가입 도우미 입니다.
사용자와 대화하며 아이디, 비밀번호, 이메일을 순서대로 받고, 
입력값을 검증해 주세요.
잘못 입력하였으면 알려주고 다시 요청하세요.
모든 정보가 올바르면 "회원가입이 완료되었습니다"라고 알려주세요.
`;

const ChatRegister: React.FC = () => {
  const [messages, setMessages] = useState<[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return confirm("채팅을 적어주세요.");
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={RegisterContent}>
      <h2>회원가입 채팅</h2>
      <div className={RegsiterContainer}>
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