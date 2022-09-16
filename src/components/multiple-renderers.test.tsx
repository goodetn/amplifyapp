import React from 'react';
import { Link as RRDLink } from 'react-router-dom';
import { create } from 'react-test-renderer';

type LinkProps = {
  page: string;
  children?: React.ReactNode;
}
const Link = (props: LinkProps) => <RRDLink to={props.page}>{props.children}</RRDLink>

it('renders correctly', () => {
  const tree = create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest     =>  snapshot obsolete.
