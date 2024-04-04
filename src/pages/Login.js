// Login.js (React component)
import React, { useState } from 'react';
import axios from 'axios'; 

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNumber: '',
    gender: '',
    dob: ''
  });

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
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error signing up:', error);
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
      </form>
    </div>
  );
};

export default Login;
