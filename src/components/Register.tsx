import { useState, FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
  
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/users/register`;
  
    try {
      const response = await axios.post(apiUrl, userData, { withCredentials: true });
      console.log("Registration successful:", response.data);
      setRegistrationSuccess(true);
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
  
      // Notify user
      alert("Registration successful! Please check your email to verify your account.");
      // Redirect user
      setTimeout(() => navigate("/login", { replace: true }), 3000);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Registration failed:", error.response.data);
          setErrorMessage(
            error.response.data.error ||
            "An error occurred during registration."
          );
        } else if (error.request) {
          console.error("No response received:", error.request);
          setErrorMessage("No response from server. Please try again later.");
        } else {
          console.error("Error setting up the request:", error.message);
          setErrorMessage(
            "Error sending data to the server. Please try again."
          );
        }
      } else {
        console.error("An unexpected error occurred:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <img
        src="/images/timestack-logo.png"
        alt="Company Logo"
        className="register-logo"
      />
      <h2>Create Account</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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
