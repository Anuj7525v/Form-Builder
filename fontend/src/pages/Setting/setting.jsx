
import React, { useState, useEffect } from 'react';
import { allSetting, updateAuth } from '../../Service/auth';
import styles from "./setting.module.css";
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";


function Setting() {
  const [settings, setSettings] = useState({
    username: '',
    updateEmail: '',
    oldPassword: '',
    newPassword: '',
  });
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const userSettings = await allSetting();
        setSettings({
          ...settings,
          username: userSettings.username,
          email: userSettings.email,
        });
      } catch (error) {
        console.error('Error fetching user settings:', error);
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      setIsActive(true);
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await updateAuth(settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('token');
    setIsActive(false);
    navigate('/login');
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}><h3>Settings</h3></div>

      <div className={styles.box}>
        <div className={styles.form}>
          <form onSubmit={handleUpdate}>
            <div className={styles.inputGroup}>
              <CiUser />
              <input type="text"
                placeholder="Name"
                name='username'
                value={settings.username}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <CiMail />
              <input type="email"
                placeholder="Update Email"
                name='updateEmail'
                value={settings.updateEmail}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <CiLock />
              <input type="password"
                placeholder="Old Password"
                name='oldPassword'
                value={settings.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <CiLock />
              <input type="password"
                placeholder="New Password"
                name='newPassword'
                value={settings.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className={styles.btn}>
              <button >Update</button>
            </div>
          </form>
        </div >
      </div>
      <div className={styles.logoutbox}>
        {isActive && (<p onClick={handleLogout}> <span><IoLogOutOutline /></span>Logout</p>)}



      </div>
    </div>
  );
}

export default Setting;
