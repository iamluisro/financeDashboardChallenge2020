import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Register.scss';
import googleIcon from '../assets/img/google-icon.png';
import linkedInIcon from '../assets/img/linkedinlogo.png';

const Register = () => {
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form'>
          <input
            name='nombre'
            className='input'
            type='text'
            placeholder='Tu nombre'
          //onChange={handleInput}
          />
          <input
            name='apellido'
            className='input'
            type='text'
            placeholder='Tu apelldio'
          //onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
          //onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
          //onChange={handleInput}
          />
          <button className='button' type='submit'>
            Regístrate
          </button>
        </form>
        <section className='register__container--social-media'>
          <div>
            {' '}
            Regístrate con tu cuenta de Google
            {' '}
            <img src={googleIcon} alt='googleIcon' />
          </div>
          <div>
            {' '}
            Regístrate con tu cuenta de LinkedIn
            {' '}
            <img src={linkedInIcon} alt='Linkedin Logo' />
          </div>

        </section>
        <p className='register__container--register'>
          ¿No tienes cuenta?
          {' '}
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

export default Register;
