import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const PU = process.env.PUBLIC_URL;
  const email = useRef();
  const password = useRef();
  const { user, isFetching, err, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <img className='loginImg' src={PU + '/images/login.png'} alt='' />
          <h3 className='loginLogo'>D&#38;DSocial</h3>
          <span className='loginDesc'>Bienvenido de nuevo, aventurero!</span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Email'
              type='email'
              required
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              ref={password}
            />
            <button className='loginButton'>
              {isFetching ? (
                <CircularProgress color='inherit' size='25px' />
              ) : (
                'Entrar'
              )}
            </button>
            <span className='loginForgot'>Olvidaste tu contraseña?</span>
            <button className='toRegisterButton'>
              <Link
                to='/register'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {isFetching ? (
                  <CircularProgress color='inherit' size='25px' />
                ) : (
                  'Crear cuenta nueva'
                )}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
