import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx'
import { Provider } from 'react-redux';
import store from './store/store';
import './styling/main.css';
ReactDOM.render( <Provider store = { store }><App></App></Provider>, document.getElementById('app'));