import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// reducers create the state
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// the state of the whole app lives inside the store
const store = applyMiddleware()(createStore);

ReactDOM.render(
    // wrap app in Provider
    <Provider store={store(reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
