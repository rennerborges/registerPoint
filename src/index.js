import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Teste from './components/teste';
import PrivateRoute from './components/PrivateRoute';
ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <PrivateRoute exact path="/teste" component={Teste}/>
    </Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
