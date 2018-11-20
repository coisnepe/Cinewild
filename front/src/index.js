import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers/index';
import { createLogger } from 'redux-logger';
import rootSaga from './sagas/index'
import createSagaMiddleware from 'redux-saga';


import { BrowserRouter } from 'react-router-dom';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    combinedReducers, 
    applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
