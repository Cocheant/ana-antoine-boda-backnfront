
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Admin from './pages/Admin';
import {  useState } from 'react';

// A helper function to simulate authentication status (replace with real logic)


const App = () => {

  const [authenticated, setAuthenticated ] = useState(false);
  const logIn = () => {
    setAuthenticated(true);
  };
  return (

      <Router>
        <Routes>
          {/* Route for the Main component (public page) */}
          <Route path="/" element={<Main />} />
  
          {/* Route for the Login component */}
          <Route path="/login" element={<Login logged={logIn} />} />
  
          {/* Protected route for the Admin component */}
          <Route 
            path="/admin" 
            element={<Admin />} 
          />
        </Routes>
      </Router>
  )
}

export default App
