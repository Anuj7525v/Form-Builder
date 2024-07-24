
import React from 'react';
import styles from "./deleteModel.module.css";

function ConfirmDeleteModel({ onConfirm, onClose }) {
  return (
    <div className={styles.popup}>
      <div className={styles.popupinner}>
        <h2>Are you sure you want to delete this?</h2>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModel;
