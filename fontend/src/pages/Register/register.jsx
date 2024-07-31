import React, { useState } from 'react';
import styles from "./register.module.css";
import { useNavigate } from "react-router-dom";

import { signup } from '../../Service/auth.js';


export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const data = { username, email, password,confirmPassword };
            const response = await signup(data);
            if (response.status === 200) {
                alert(response.data);
                navigate('/login');
            }
        } catch (error) {
            setError(error.message);
        }








    };

    return (
        <div className={styles.page}>
            <div className={styles.Box}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.InputGroup}>
                        <label htmlFor='username'>Username</label>
                        <input
                            type="text"
                            value={username}
                            placeholder='Enter a username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
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
                    <div className={styles.InputGroup}>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            type="password"
                            placeholder='Enter a confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <button type="submit">Sign Up</button>
                </form>
                <div className={styles.loginbox}>
                    Already have an account? <a href="/login">Login</a>
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


