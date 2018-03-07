import { createStore } from 'redux';

import reducers from './reducers';
import initialState from './initialState';

const store = createStore(reducers, initialState);

export default store;