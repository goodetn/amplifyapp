import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Toggle from './toggle';

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

it('change value when clicked', () => {// 1 change value when clicked
  const onChange = jest.fn();

  act(() => {
    root.render(<Toggle onChange={onChange} />);
  });
  
  // get the button by selector
  const button = document.querySelector('[data-testid=toggle]');
  // expect innerHTML is Turn on
  expect(button?.innerHTML).toBe('Turn on');
  // dispatchEvent new MouseEvent click {bubbles: true}
  act(() => {
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  // expect onChange called 1 times
  expect(onChange).toHaveBeenCalledTimes(1);
  // expect innerHTML is Turn off
  expect(button?.innerHTML).toBe('Turn off');
  
  // loop 5 time by for loop, button dispatchEvent Mouse click {bubbles: true}
  for (let i = 0; i < 5; i++) {
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  }
  // expect onChange called 6 times
  expect(onChange).toHaveBeenCalledTimes(6);
  // expect innerHTML is Turn on
  expect(button?.innerHTML).toBe('Turn off');
});
