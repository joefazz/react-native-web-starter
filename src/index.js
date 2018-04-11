import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Note: This file was not converted to typescript because of issues with module resolution in registerServiceWorker()
// This level is fairly static anyways, so there isn't a huge benefit to converting it
ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
