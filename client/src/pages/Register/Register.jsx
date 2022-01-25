import { useRef } from 'react';
import './register.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>D&#38;DSocial</h3>
          <span className='loginDesc'>Connect with other players</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='loginInput'
            />
            <input
              placeholder='Email'
              type='email'
              required
              ref={email}
              className='loginInput'
            />
            <input
              placeholder='Password'
              type='password'
              required
              ref={password}
              className='loginInput'
              minLength='6'
            />
            <input
              placeholder='Repeat Password'
              type='password'
              required
              ref={passwordAgain}
              className='loginInput'
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>
            <button className='loginRegisterButton'>
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Log Into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
