import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/App';

const store =  createStore(reducers, {}, applyMiddleware(reduxThunk, reduxPromise));


 var token = window.location.search.split('token=')[1];
 if (token != null) {
   localStorage.setItem("token", token);
   window.location.href = window.location.href.split('?')[0];
 }


ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
