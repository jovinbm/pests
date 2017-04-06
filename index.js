import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes/ReactRoutes';
import {Router,hashHistory,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';


const initialState= JSON.parse(window.__PRELOADED_STATE__);
const store=createStore(
    rootReducer,
    initialState
);




ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}>
        </Router>
    </Provider>
    ,
    document.getElementById('app'));