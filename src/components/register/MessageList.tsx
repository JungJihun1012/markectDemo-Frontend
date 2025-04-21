import React, { forwardRef } from 'react';
import { Message } from '../../types/tpyes';

interface MessageListProps {
  messages: Message[];
}

const MessageList = forwardRef<HTMLDivElement, MessageListProps>(({ messages }, ref) => {
  return (
    <div style={{ height: 400, overflowY: 'auto', padding: 10, border: '1px solid #ccc', borderRadius: 8 }}>
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
      <div ref={ref} />
    </div>
  );
});

export default MessageList;
