import React from "react";
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Hello from './hello';

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container!);
});

afterEach(() => {
  // cleanup on exiting
  root.unmount();
});

it('should render a greeting', () => {
  // render Hello
  act(() => {
    root.render(<Hello />);
  });

  // expect pretty container.innerHTML to match inline snapshot 
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<span>Hey, stranger</span>"`);/** ... gets filled automatically by jest ... */

  // render Hello name="Jenny"
  act(() => {
    root.render(<Hello name="Jenny" />);
  });
  
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<h1>Hello, Jenny!</h1>"`);/** ... gets filled automatically by jest ... */
  
  act(() => {
    root.render(<Hello name="Margaret" />);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<h1>Hello, Margaret!</h1>"`);/** ... gets filled automatically by jest ... */
});
