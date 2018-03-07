import React from 'react'
import { Provider } from 'react-redux';
import HybridApp from './src/App'
import store from './src/redux/configureStore';

export default class NativeApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HybridApp />
            </Provider>
        );
    }
}