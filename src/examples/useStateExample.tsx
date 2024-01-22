import { useEffect, useState } from "react";

export function UseStateExample() {

  // these will re-render on every keystroke
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  const items: number[] = [...Array(1)];

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>using useState()</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />  
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      <br />
      <div>
        {items.map((item, i) =>
          <FirstNameBox firstName={firstName} onChangeName={(value) => setFirstName(value)} key={i} />
        )}
      </div>
    </>
  )
}

function FirstNameBox(props: {
  firstName: string,
  onChangeName: (value: string) => void
}) {

  const [renders, setRenders] = useState(0);

  useEffect(() => {
    setRenders(r => r + 1);
  }, [props]);

  // There is no state logic in this component for firstName
  // That belongs to the parent component
  // The ui will update when the props update
  // This is known as 'lifting state up'

  // note that when last name changes, it also causes rerenders of this component
  // this can lead to performance issues if there's lots of these with subchildren etc etc

  return (
    <div className="first-name-box">
      <h3>FirstNameBox</h3>
      First name: { props.firstName }
      <br /><br />
      Renders: { renders }
      <br />
      <button onClick={() => props.onChangeName('a changed name')}>change name</button>
    </div>
  );
};