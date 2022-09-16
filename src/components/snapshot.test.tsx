import React from 'react';
import { create } from 'react-test-renderer';
import Link from './jest/Link';

it('renders correctly', () => {
  const tree = create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest     =>  snapshot obsolete.
