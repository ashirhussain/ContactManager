import React ,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Privateroute from './components/routing/Privateroute';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken'
import './App.css';


function App() {
  return (<AuthState>
    <ContactState>
    <AlertState>
    <Router>
    <Fragment>
    <Navbar/>
    <div className="container">
    <TransitionGroup>
    <CSSTransition
        // in={showMessage}
        timeout={500}
        classNames="item"
        // unmountOnExit
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
      >
    <Alert/>

    </CSSTransition>
    </TransitionGroup>

     <Switch>
      <Privateroute exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>


     </Switch>
    </div>
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
</AuthState>
  );
}

export default App;
