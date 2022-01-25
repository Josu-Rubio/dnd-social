import React, { useContext } from 'react';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route
          path='/login'
          element={user ? <Navigate replace to='/' /> : <Login />}
        />
        <Route
          path='/register'
          element={user ? <Navigate replace to='/' /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
