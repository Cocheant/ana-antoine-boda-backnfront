import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const Admin = () => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      // Make a request to the backend to check authentication
      axios.get(`${apiUrl}/auth/token`, { withCredentials: true })
        .then((response) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
          navigate('/login');
        });
    }, [navigate]);
  
    return (
      <div>
        {isAuthenticated ? <h1>Admin Page - Protected Content</h1> : <p>Loading...</p>}
      </div>
    );
};

export default Admin;
