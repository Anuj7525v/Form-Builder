import React from 'react';
import styles from "../theme.module.css";
import style from "./themechoice.module.css";
import light from "../../../assets/light.png";
import dark from '../../../assets/Dark.png';
import blue from '../../../assets/sky.png';

function ThemeSelector({ setTheme }) {
  return (
    <div className={styles.themeselector}>
      <div className={style.top}>
        <h2>Customize the theme</h2></div>
      <div className={style.bottom}>
        <button onClick={() => setTheme('light')}>
          <div className={style.imgbox}>
            <img src={light} alt="Light" />
            <span>Light</span>
          </div>
        </button>
        <button onClick={() => setTheme('dark')}>
        <div className={style.imgbox}>

          <img src={dark} alt="Dark" />
          <span>Dark</span>
        </div>
        </button>
        <button onClick={() => setTheme('tailBlue')}>
        <div className={style.imgbox}>
          <img src={blue} alt="Light" />
          <span className={style.last}>Tail Blue</span>
        </div></button>
      </div>

    </div>
  );
}

export default ThemeSelector;
