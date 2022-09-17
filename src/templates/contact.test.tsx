import React from "react";
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Contact from './contact';

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

it('should render contact information', () => {
  const center = { lat: 0, lng: 0 };

  act(() => {
    root.render(<Contact
      name="tot"
      email="tottranrotate@gmail.com"
      site="toithietke.vn"
      center={center}
    />);
  });
  expect(container.querySelector('[data-testid="email"]')?.getAttribute('href'))
    .toEqual("mailto:tottranrotate@gmail.com");
  expect(container.querySelector('[data-testid="site"]')?.getAttribute('href'))
    .toEqual("toithietke.vn");
  // expect(container.querySelector('[data-testid="map"]')?.textContent)
  //   .toEqual("0:0");
  
});
