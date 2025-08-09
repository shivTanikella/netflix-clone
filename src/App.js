import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browse" element = {<Browse/>}/>
        <Route exact path="/signin" element = {<Signin/>}/>
        <Route exact path="/signup" element = {<Signup/>}/>
        <Route exact path={ROUTES.HOME} element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;