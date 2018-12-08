import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { changePage } from './reducers/reducers';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(changePage, applyMiddleware(logger));

ReactDOM.render((
    <Provider store = {store}> 
            <App/>
    </Provider> 
), document.getElementById('root'));
registerServiceWorker();
