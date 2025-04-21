import React, { ChangeEvent, FormEvent } from 'react';
import { varsObj } from '../../styles/theme/styleVar.css';

interface InputFormProps {
  input: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
  disabled: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ input, onInputChange, onSubmit, disabled }) => {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', marginTop: 15, width: 350, position: 'relative', left: 20}}>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="메시지를 입력하세요..."
        style={{ flexGrow: 1, padding: 13, fontSize: 16, borderRadius: 4, border: '1px solid #ccc'}}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        style={{
          marginLeft: 8,
          padding: '6px 14px',
          fontSize: 16,
          borderRadius: 6,
          border: 'none',
          backgroundColor: varsObj.color.headerColor,
          color: 'white',
          cursor: !input.trim() || disabled ? 'not-allowed' : 'pointer',
          position: 'absolute',
          right: 12,
          top: 5
        }}
      >
        전송
      </button>
    </form>
  );
};

export default InputForm;
