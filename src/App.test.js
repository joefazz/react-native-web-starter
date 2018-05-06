import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Note: This file was not converted to typescript because of collistion
 * from @types/react-dom, @types/react-native, and @types/react-node (dependency of @types/react-dom)
 * This level is fairly static anyways, so there isn't a huge benefit to converting it
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
