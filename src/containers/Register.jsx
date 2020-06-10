import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../routes/App';
import '../assets/styles/Register.scss';

const Register = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AuthContext);

  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: false,
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fathomless-thicket-73962.herokuapp.com/api/auth/sign-up', form)
      .then((res) => {
        console.log(res);
        props.history.push('/login');
      })
      .catch((err) => console.log('Error', err));
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Tu nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' value={true} name='isAdmin' onChange={handleInput} />
            Is this user an admin?
          </label>
          <button className='button' type='submit'>
            Regístrate
          </button>
        </form>
        <p className='register__container--register'>
          Ya tienes cuenta?
          {' '}
          <Link to='/login'>Inicia Sesión</Link>
        </p>
      </section>
    </section>
  );
};

export default Register;
