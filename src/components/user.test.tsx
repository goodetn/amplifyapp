import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import User, { UserTypes } from './user';

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

it('render user data', async () => {
  const fakeUser: UserTypes = {
    name: 'tot',
    age: 33,
    address: 'hcm'
  };

  // Creates a mock function similar to jest.fn but also tracks calls to object[methodName]
  // Note: By default, jest.spyOn also calls the spied method. This is different behavior from most other test libraries
  jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(fakeUser),
  }));

  await act(async () => {
    root.render(<User id={1} />);
  });

  expect(container.querySelector('summary')?.textContent).toBe(fakeUser.name);
  expect(container.querySelector('strong')?.textContent).toBe(fakeUser.age.toString());
  expect(container.textContent).toContain(fakeUser.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
