import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/styles/Header.scss';
import { AuthContext } from '../routes/App'

const Header = () => { 
  const [state, dispatch] = useContext(AuthContext);
  const hasUser = Object.keys(state.user).length > 0;
  console.log(`hasUser ${hasUser}`);

const handleLogout = () => {
  dispatch({
    type: 'LOGOUT',
    payload: state
  })
  document.cookie = 'email=';
  document.cookie = 'name=';
  document.cookie = 'id=';
  document.cookie = 'token=';
}

  return (

  <div className='Header-container'>
    <Link to='/'>
      <img src={logo} alt='GBM Logo' className='Header__Logo' />
    </Link>
    <nav>
      <ul>
        <li>IPC</li>
      </ul>
    </nav>
    <div className='Header-userLogin'>
      {hasUser ? 
        <div>
        <p>{state.user.email}</p> 
        <p><a href='/' onClick={handleLogout}>Cerrar Sesión</a></p>
        </div>
        
        : 
      <Link to='/login'>
        Login
      </Link>
      }
    </div>
  </div>
);
};

export default Header;
