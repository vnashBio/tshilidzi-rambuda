import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<Switch>
    <App />
</Switch>
</BrowserRouter>
,document.getElementById('root'));


