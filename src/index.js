import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './redux/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
