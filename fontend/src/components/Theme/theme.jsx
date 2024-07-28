import React, { useState } from 'react';
import ThemeSelector from './themechoice/themechoice';
import ChatWindow from './chatpage/chatpage';
import styles from "./theme.module.css";


const themes = {
    light: {
      background: '#fff',
      color: '#000',
      incomingMessageBg: '#e6e6e6',
      outgoingMessageBg: '#007bff',
      outgoingMessageColor: '#fff'
    },
    dark: {
      background: '#333',
      color: '#fff',
      incomingMessageBg: '#444',
      outgoingMessageBg: '#007bff',
      outgoingMessageColor: '#fff'
    },
    tailBlue: {
      background: '#b3cde0',
      color: '#000',
      incomingMessageBg: '#6497b1',
      outgoingMessageBg: '#005b96',
      outgoingMessageColor: '#fff'
    }
  };
  
  function Theme() {
    const [theme, setTheme] = useState('light');
  
    return (
      <div className={styles.box} style={{ background: themes[theme].background, color: themes[theme].color }}>
        <ThemeSelector setTheme={setTheme} />
        <ChatWindow theme={themes[theme]} />
      </div>
    );
  }
  
  export default Theme;