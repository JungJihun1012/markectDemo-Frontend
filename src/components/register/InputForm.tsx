import React, { ChangeEvent, FormEvent } from 'react';

interface InputFormProps {
  input: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
  disabled: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ input, onInputChange, onSubmit, disabled }) => {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', marginTop: 10 }}>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="메시지를 입력하세요..."
        style={{ flexGrow: 1, padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        style={{
          marginLeft: 8,
          padding: '8px 16px',
          fontSize: 16,
          borderRadius: 4,
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: !input.trim() || disabled ? 'not-allowed' : 'pointer',
        }}
      >
        전송
      </button>
    </form>
  );
};

export default InputForm;
