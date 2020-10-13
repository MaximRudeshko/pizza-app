import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store'
import './index.css';
import App from './components/app/App';


window.store = store



ReactDOM.render(
    <Router>
      <Provider store = {store}>
        <App />
      </Provider>
    </Router>
  ,
  document.getElementById('root')
);


