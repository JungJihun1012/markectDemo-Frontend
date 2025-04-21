import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageList from '../components/register/MessageList';
import InputForm from '../components/register/InputForm';
import {
  SignUpDTO,
  Message,
  existingUsernames,
  usernameRegex,
  passwordRegex,
  displayNameRegex,
  emailRegex,
} from '../types/tpyes';
import { RegisterContent, RegsiterContainer } from '../styles/style.css';

const ChatRegister: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '생성할 아이디를 입력해주세요.' },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'id' | 'password' | 'info' | 'done'>('id');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState<SignUpDTO>({ username: '', displayName: '', password: '' });
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      alert('메시지를 입력해주세요.');
      return;
    }

    setMessages(prev => [...prev, { role: 'user', content: trimmedInput }]);
    setInput('');

    switch (step) {
      case 'id':
        if (!usernameRegex.test(trimmedInput)) {
          setMessages(prev => [...prev, { role: 'bot', content: '아이디는 한영숫자 5~20자만 가능합니다. 다시 입력해주세요.' }]);
        } else if (existingUsernames.includes(trimmedInput)) {
          setMessages(prev => [...prev, { role: 'bot', content: '중복된 아이디입니다. 다시 입력해주세요.' }]);
        } else {
          setUserData((prev: any) => ({ ...prev, username: trimmedInput }));
          setMessages(prev => [...prev, { role: 'bot', content: '중복된 아이디가 없습니다. 비밀번호를 입력해주세요.' }]);
          setStep('password');
        }
        break;

      case 'password':
        if (!passwordRegex.test(trimmedInput)) {
          setMessages(prev => [...prev, { role: 'bot', content: '비밀번호는 숫자와 특수문자(!@#$%^&*())를 1개 이상 포함한 8~16자 영숫자 조합이어야 합니다. 다시 입력해주세요.' }]);
        } else {
          setUserData((prev: any) => ({ ...prev, password: trimmedInput }));
          setMessages(prev => [...prev, { role: 'bot', content: '닉네임과 이메일을 "닉네임, 이메일" 형식으로 입력해주세요.' }]);
          setStep('info');
        }
        break;

      case 'info':
        { const parts = trimmedInput.split(',').map(s => s.trim());
        if (parts.length !== 2) {
          setMessages(prev => [...prev, { role: 'bot', content: '닉네임과 이메일을 정확한 형식으로 입력해주세요. 예: 홍길동, example@example.com' }]);
        } else {
          const [displayName, email] = parts;
          if (!displayNameRegex.test(displayName)) {
            setMessages(prev => [...prev, { role: 'bot', content: '닉네임은 한영숫자 및 한글 2~16자만 가능합니다. 다시 입력해주세요.' }]);
            return;
          }
          if (email && !emailRegex.test(email)) {
            setMessages(prev => [...prev, { role: 'bot', content: '유효한 이메일 주소를 입력해주세요.' }]);
            return;
          }
          setUserData((prev: any) => ({ ...prev, displayName, email }));
          setMessages(prev => [...prev, { role: 'bot', content: '회원가입이 완료되었습니다!' }]);
          setStep('done');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
        break; }

      case 'done':
        setMessages(prev => [...prev, { role: 'bot', content: '회원가입이 이미 완료되었습니다.' }]);
        break;
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={RegisterContent}>
      <h2>회원가입 채팅</h2>
      <div className={RegsiterContainer}>
        <MessageList messages={messages} ref={chatEndRef} />
      </div>
      <InputForm
        input={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        disabled={step === 'done'}
      />
    </div>
  );
};

export default ChatRegister;
