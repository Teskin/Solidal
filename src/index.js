import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import 'normalize.css';
import './App.css';
import reducers from './reducers';
import MainContainer from './component/main-container';
import CompanyNew from './component/company-new';

// Middleware redux-promise that stands between ajax calls and redux;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
                {/* // SWITCH: is in charge of avoiding interference between different routes. The routes have to be orderer
                     properly. */}
            <Switch>
                {/* // :id is a wildcard of sorts which means that it is a jolly.
                          It will take whichever value or properties that it receives and will move it to the
                          related component. It must stay as second position or it would go in conflicts with the 'new' above. */}
                {/*<Route path="/company/:id" component={test}/>*/}
                <Route path="/company/new" component={CompanyNew}/>
                <Route path="/" component={MainContainer}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));