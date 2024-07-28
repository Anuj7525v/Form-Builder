import React from 'react';
import styles from "../theme.module.css";

function ThemeSelector({ setTheme }) {
  return (
    <div className={styles.themeselector}>
      <h2>Customize the theme</h2>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('tailBlue')}>Tail Blue</button>
    </div>
  );
}

export default ThemeSelector;
