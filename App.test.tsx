import * as React from 'react';
import App from './App';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});