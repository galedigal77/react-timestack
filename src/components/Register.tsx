import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Register.css';  

const Register: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Registering:', firstName, lastName, email, password);
    };

    return (
        <div className="register-container">
            <img src="/images/timestack-logo.png" alt="Company Logo" className="register-logo"/>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
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
                <button type="submit">Register</button>
            </form>
            <p className="form-footer">
                Already have an account? <Link to="/login">Sign In instead.</Link>
            </p>
        </div>
    );
};

export default Register;
