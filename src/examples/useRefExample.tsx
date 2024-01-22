import { useRef, useState } from "react";

export function UseRefExample() {

  const [, forceUpdate] = useState({});

  const firstName = useRef('');
  const lastName = useRef('');
  const fullName = firstName.current + ' ' + lastName.current;

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // will not trigger rerender
    firstName.current = e.target.value;
  };

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // will not trigger rerender
    lastName.current = e.target.value;
  };

  function forceRerender() {
    // manually trigger rerender (just for demo)
    // you wouldn't do this in the real world
    forceUpdate({});
  };

  return (
    <>
      <h2>using useRef()</h2>
      <label>
        First name:{' '}
        <input
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          onChange={handleLastNameChange}
        />
      </label>
      <button onClick={() => forceRerender()}>
        Update
      </button>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  )
};