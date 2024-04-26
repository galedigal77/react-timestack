import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Register.css';  

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Logging in with:', email, password);
    };

    return (
        <div className="register-container">
            <img src="/images/timestack-logo.png" alt="Company Logo" className="register-logo"/>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>
            <p className="form-footer">
                <Link to="/register">Forgot Password</Link>
            </p>
            <p className="form-footer">
                No Account Yet? <Link to="/register">Create one.</Link>
            </p>
        </div>
    );
};

export default Login;
