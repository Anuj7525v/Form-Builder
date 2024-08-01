import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar(){
  const [username] = useState("John Doe");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === 'setting') {
      navigate('/setting');
    } else if (value === 'logout') {
        localStorage.removeItem('token');
      navigate('/login');
    }
  };
  
  return (
    <div className={styles.navbar}>
      <select onChange={handleChange} defaultValue="" className={styles.dropdown}>
        <option value="" disabled > {username} WorkSpace
       

        </option>
        <option value="setting">Settings</option>
        <option value="logout" >Log Out</option>
      </select>
    </div>
  );
}

export default Navbar;
