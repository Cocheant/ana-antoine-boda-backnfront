
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Admin from './pages/Admin';

// A helper function to simulate authentication status (replace with real logic)


const App = () => {

  return (

      <Router>
        <Routes>
          {/* Route for the Main component (public page) */}
          <Route path="/" element={<Main />} />
  
          {/* Route for the Login component */}
          <Route path="/login" element={<Login  />} />
  
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
