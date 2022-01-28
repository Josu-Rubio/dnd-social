import { useRef } from 'react';
import './register.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const AlertBox = () => {
    return (
      <>
        <div className='alert'>
          <span className='closebtn' onClick={navigate('/register')}>
            &times;
          </span>
          This is an alert box.
        </div>
      </>
    );
  };

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
        alert('Wellcome to the Dungeon, player!');
        navigate('/register');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <div className='registerLeft'>
          <img
            className='registerImg'
            src={PF + './main/register.png'}
            alt=''
          />
          <h3 className='registerLogo'>D&#38;DSocial</h3>
          <span className='registerDesc'>
            Bienvenido, aventurero... <br />
            Aquí comienza tu campaña
          </span>
        </div>
        <div className='registerRight'>
          <form className='registerBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='registerInput'
            />
            <input
              placeholder='Email'
              type='email'
              required
              ref={email}
              className='registerInput'
            />
            <input
              placeholder='Password'
              type='password'
              required
              ref={password}
              className='registerInput'
              minLength='6'
            />
            <input
              placeholder='Repeat Password'
              type='password'
              required
              ref={passwordAgain}
              className='registerInput'
            />
            <button className='registerButton' type='submit'>
              Registrarse
            </button>
            <button className='toLoginButton'>
              <Link
                to='/login'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Entrar en mi cuenta
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
