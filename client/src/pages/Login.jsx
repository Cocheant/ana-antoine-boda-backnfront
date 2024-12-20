import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Make a request to the backend to check authentication
    axios.get(`${apiUrl}/auth/token`, { withCredentials: true })
      .then((response) => {
        navigate('/admin');
      })
      .catch((error) => {
    });
  }, [navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { username, password }, {
        withCredentials: true // Send and receive cookies for authentication
      });
      if (response.status === 200) {
        // after successful login
        navigate('/admin');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
