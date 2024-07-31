import React, { useState } from 'react';
import styles from "./workspace.module.css";
import Flow from "../../components/Flow/flow";
import Response from '../../components/Response/response';
import Theme from '../../components/Theme/theme';

function WorkSpace() {
    const [currentPage,setCurrentPage] = useState('flow');
   const switchPage = () => {
        switch (currentPage) {
           case 'flow': return <Flow/>;
           case 'theme' : return <Theme/>;
           case 'response' : return <Response/>;
           default : return <Flow/>;
        }
    };


  return (
    <div className={styles.page}>
    <div className={styles.Header}>
        <div className={styles.Input}>
            <input type="text" placeholder='Enter Form Name' required/>
        </div>
        <div className={styles.pagebtn}>
          <button onClick={() => setCurrentPage('flow')}>Flow</button>
          <button onClick={() => setCurrentPage('theme')}>Theme</button>
          <button onClick={() => setCurrentPage('response')}>Response</button>
        </div>
        <div className={styles.detail}>
            <button>Share</button>
            <button>Save</button>
            <button>X</button>
        </div>
    </div>
    <div className={styles.Middle}>
   {switchPage()}
    </div>

      
    </div>
  )
}

export default WorkSpace;
