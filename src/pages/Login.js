// Login.js (React component)
import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {...formData});
      console.log(response.data); 
      setErrorMessage(''); // Clear error message if successful
      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 403) { // Assuming 401 is the status code for "unauthorized"
        setErrorMessage("User doesn't exists. Please try again.");
      } else if (error.response && error.response.status === 401) { // Assuming 401 is the status code for "unauthorized"
        setErrorMessage('Invalid email or password. Please try again.');
      }
      else {
        console.error('Error logging in:', error);
        setErrorMessage('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Login Account</h1>
        <div className="infield">
          <input type="email" placeholder="Email" name="email" className="input-field" onChange={handleChange} /> {/* Changed name to 'email' */}
        </div>
        <div className="infield">
          <input type="password" placeholder="Password" name="password" className="input-field" onChange={handleChange} /> {/* Changed name to 'password' */}
        </div>
        <button type="submit" className="btn mt-4">Login In</button>
        {errorMessage && <div className="error-message mt-4">{errorMessage}</div>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
