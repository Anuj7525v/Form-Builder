import React from 'react';
import styles from '../theme.module.css';

function ChatWindow({ theme }) {
  return (
    <div className={styles.chatwindow}>
      <div className="message incoming" style={{ background: theme.incomingMessageBg }}>
        <p>Hello</p>
      </div>
      <div className="message outgoing" style={{ background: theme.outgoingMessageBg, color: theme.outgoingMessageColor }}>
        <p>Hi</p>
      </div>
    </div>
  );
}

export default ChatWindow;