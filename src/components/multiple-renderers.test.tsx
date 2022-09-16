import React from 'react';
import { act as domAct } from 'react-dom/test-utils';
import { act as testAct, create } from 'react-test-renderer';
import App from './../App';

let root;

it('should match snapshot', () => {
  domAct(() => {
    testAct(() => {
      root = create(<App />);
    });
  });
});

expect(root).toMatchSnapshot();
