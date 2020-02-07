import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Teste from './components/teste';
import PrivateRoute from './components/PrivateRoute';
import Hooks from './components/Hooks';

ReactDOM.render(

    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <PrivateRoute exact path="/teste/:id" component={Hooks} />
        </Switch>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
