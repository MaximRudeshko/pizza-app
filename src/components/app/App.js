import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import { Cart, Home } from '../pages';

import '../../assets/scss/app.scss'


const App = () => {

  return (
    <div className="wrapper">
        <Header/>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/cart' exact component = {Cart}/>
    </div>
  )
}

export default App;


