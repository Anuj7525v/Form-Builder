// frontend/src/components/CreateFolderPopup.js
import React, { useState } from 'react';
import styles from "./createModel.module.css";

function CreateFolderModel({ onCreate, onClose }) {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    onCreate(username);
    setUsername('');
  };

  return (
    <div className={styles.Model}>
      <div className={styles.Header}>
        <p>Create New Folder</p> </div>
      <div className={styles.Input}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Folder name" />
      </div>
      <div className={styles.btn}>
      <button onClick={handleSubmit}>Done</button>
      <button onClick={onClose}>Cancel</button>
      </div>
    </div>

  );
}

export default CreateFolderModel;
