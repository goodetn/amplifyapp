import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Card from './card';

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container!);
  jest.useFakeTimers();
});

afterEach(() => {
  // cleanup on exiting
  root.unmount();
  jest.useRealTimers();
});

it('should select null after timing out', () => {
  // create onSelect jest fn
  const onSelect = jest.fn();
  
  // render Card with onSelect props
  act(() => {
    root.render(<Card onSelect={onSelect}  />)
  });
  
  // advance Timers by time 100ms
  act(() => {
    jest.advanceTimersByTime(100);
  });
  // expect onSelect not to have been called
  expect(onSelect).not.toHaveBeenCalled();

  // advance Timers by time 5000 second
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  // expect onSelect to be called with null
  expect(onSelect).toHaveBeenCalledWith(null);
});

// should clean up on being removed
it('should clean up on being removed', () => {
  // create onSelect jest fn
  const onSelect = jest.fn();
  
  // render Card with onSelect props
  act(() => {
    root.render(<Card onSelect={onSelect} />);
  });

  // advance Timers by time 100ms
  act(() => {
    jest.advanceTimersByTime(100);
  });
  // expect onSelect not to have been called
  expect(onSelect).not.toHaveBeenCalled();

  // unmount the app
  act(() => {
    root.unmount();
  });
  // advance Timers by time 5000 second
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  // expect onSelect not to have been called
  expect(onSelect).not.toHaveBeenCalled();
});

// should accept selections
it('should accept selections', () => {
  // create onSelect jest fn
  const onSelect = jest.fn();

  // render Card component with onSelect props
  act(() => {
    root.render(<Card onSelect={onSelect} />);
  });

  // dispatchEvent mouse click on data-testid='2' element selector
  act(() => {
    document.querySelector("[data-testid='2']")?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // expect onSelect to have been called with 2
  expect(onSelect).toHaveBeenCalledWith(2);
});
