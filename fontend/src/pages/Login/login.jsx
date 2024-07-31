import React, { useState } from 'react';

import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';
import { login } from '../../Service/auth';


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {email,password};
           login(data).then((response) => {
            console.log(response);
            alert(`Welcome,${response.data.username}`);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("authId", response.data.authId);
            navigate("/dashboard");
           });
        
        

    };




return (
    <div className={styles.page}>
        <div className={styles.Box}>
            <form onSubmit={handleSubmit}>

                <div className={styles.InputGroup}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <div className={styles.InputGroup}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder='Enter a password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Sign Up</button>
            </form>
            <div className={styles.loginbox}>
                Already have an account? <a href="/signup">Register now</a>
            </div>
        </div>
        <div className={styles.icons}>
            <div className={styles.triangle1}></div>
            <div className={styles.triangle2}></div>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

        </div>

    </div>
);
};


