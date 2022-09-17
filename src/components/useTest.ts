import { createRoot, Root } from "react-dom/client";

export const useTest = () => {
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

  return { container, root };
}

export default {};
