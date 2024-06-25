
import React, { useState } from 'react';
import axios from 'axios'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: '',
    gender: '',
    dob: ''
  });

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
      const response = await axios.post('http://localhost:5000/api/user/createUser', {...formData});
      console.log(response.data); 
      setErrorMessage(''); // Clear error message if successful
    } catch (error) {
      if (error.response && error.response.status === 409) { // Assuming 409 is the status code for "email already exists"
        setErrorMessage('Email already exists. Please use a different email.');
      } else {
        console.error('Error signing up:', error);
        setErrorMessage('An error occurred during sign up. Please try again.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Create Account</h1>
        <div className="infield mt-4">
          <input type="text" placeholder="Name" name="name" className="input-field" onChange={handleChange} /> {/* Changed name to 'username' */}
        </div>
        <div className="infield">
          <input type="email" placeholder="Email" name="email" className="input-field" onChange={handleChange} /> {/* Changed name to 'email' */}
        </div>
        <div className="infield">
          <input type="password" placeholder="Password" name="password" className="input-field" onChange={handleChange} /> {/* Changed name to 'password' */}
        </div>
        <div className="infield">
          <input type="contact" placeholder="Contact Number" name="contactNumber" className="input-field" onChange={handleChange} /> {/* Changed name to 'contact' */}
        </div>
        <div className="infield">
          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} /> {/* Added onChange */}
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange} /> {/* Changed value to 'female' and added onChange */}
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="dateOfBirth">DOB:</label> {/* Changed id to 'dateOfBirth' */}
          <input type="date" id="dateOfBirth" name="dob" onChange={handleChange} /> {/* Changed name to 'dateOfBirth' and added onChange */}
        </div>
        <button type="submit" className="btn mt-4">Sign Up</button>
        {errorMessage && <div className="error-message mt-4">{errorMessage}</div>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Signup;
