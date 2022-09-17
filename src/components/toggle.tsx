import React, { useState } from 'react';

type Types = {
  onChange?: (state: boolean) => void;
}
export default function Toggle(props: Types) {
  const [press, setPress] = useState(false);
  return (
    <button
      onClick={() => {
        setPress(prev => !prev);
        props.onChange(!press);
      }}
      data-testid="toggle"
    >
      {press === true ? 'Turn off' : 'Turn on'}
    </button>
  );
}
