import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": 
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user
    };
    case "LOGOUT": 
    return {
      ...state,
      isAuthenticated: false,
      user: action.payload.user
    };
    default: 
    return state;
  };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
//  const isAdmin =(state.user.isAdmin);
  return (
  <AuthContext.Provider value={[state, dispatch]}>
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path='/' component={!state.isAuthenticated ? Login : Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Layout>
    </Switch>
  </BrowserRouter>
  </AuthContext.Provider>
)
  }

export default App;