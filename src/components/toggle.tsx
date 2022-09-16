import React, { useState } from 'react';

type Types = {
  onChange?: (state: boolean) => void;
}
export default function Toggle(props: Types) {
  const [press, setPress] = useState(false);
  const handleClick = () => {
    setPress(prev => !prev);
    props.onChange(press);
  }
  return <button onClick={handleClick} data-testid="toggle">
    {press ? 'Turn off' : 'Turn on'}
  </button>
}
