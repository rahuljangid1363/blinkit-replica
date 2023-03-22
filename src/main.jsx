import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={Store}>
   <App />
   </Provider>
)
