import React, { useEffect } from 'react';

type Types = {
  onSelect: (value: number | null) => void;
}
export default function Card(props: Types) {
  useEffect(() => {
    const ID = setTimeout(() => {
      props.onSelect(null);
    }, 5000);
    return () => clearTimeout(ID);
  }, [props.onSelect]);
  
  return <div>
    {
      [1, 2, 3, 4].map((choice: number) => (
    <button
      key={choice}
      data-testid={choice}
      onClick={() => props.onSelect(choice)}
    >
      {choice}
    </button>
      ))
    }
  </div>;
}