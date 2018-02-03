import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());
var token = window.location.search.split('token=')[1];
 if (token != null) {
   localStorage.setItem("token", token);
   window.location.href = window.location.href.split('?')[0];
 }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
