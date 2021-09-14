import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/global.css';
import './firebase/firebase';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
