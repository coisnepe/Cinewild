import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers/index';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

const loggerMiddleware = createLogger();

        
const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware
    ),
);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
