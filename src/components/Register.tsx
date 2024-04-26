import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import '../styles/Register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // User data to be sent to the backend
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };

        const apiUrl = process.env.REACT_APP_API_URL + '/api/register';

        try {
            // Make the POST request to the register endpoint
            const response = await axios.post(apiUrl, userData);
            console.log('Registration successful:', response.data);

            // Handle actions after successful registration
            // e.g., navigate to login page, show success message, etc.
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error message:', error.message);
            } else {
                console.error('An unknown error occurred:', error);
            }
        }
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
