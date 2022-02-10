import React, { useContext } from 'react';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Social from './pages/social/Social';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Messenger from './pages/messenger/Messenger';
import Podcast from './pages/podcast/Podcast';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/social' element={user ? <Social /> : <Login />} />
        <Route
          path='/login'
          element={user ? <Navigate replace to='/' /> : <Login />}
        />
        <Route
          path='/register'
          element={user ? <Navigate replace to='/' /> : <Register />}
        />
        <Route
          path='/messenger'
          element={!user ? <Navigate replace to='/' /> : <Messenger />}
        />
        <Route path='/podcast' element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;
