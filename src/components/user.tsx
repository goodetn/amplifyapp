import React, { useEffect, useState } from 'react';

export type UserTypes = {
  name: string;
  age: number;
  address: string;
}
export type UserProps = {
  id: number;
}
export default function User(props: UserProps) {
  const [user, setUser] = useState<UserTypes>(null);
  const fetchUserData = async (id: number) => {
    const response = await fetch('/' + id);
    setUser(await response.json());
  }
  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id])
  if (!user) {
    return <>loading...</>;
  }
  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> year old
      <br />
      live in {user.address}
    </details>
  )
}