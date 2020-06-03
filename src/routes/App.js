import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../components/Layout';
import Admin from '../containers/Admin';
import '../assets/styles/App.scss';

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') || false,
  user: {
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || '',
    password: '',
    isAdmin: JSON.parse(localStorage.getItem('isAdmin')) || '',
  },
  token: localStorage.getItem('token') || '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
        token: action.payload.token,
      };
    default:
      return state;
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isAdmin = (state.user.isAdmin === true);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path='/' component={!state.isAuthenticated ? Login : Home} />
            <Route exact path='/admin' component={!isAdmin ? Login : Admin} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
