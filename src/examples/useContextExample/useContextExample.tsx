import { useNameContext } from "./useContextExampleProvider";
import { FirstNameBox } from "./FirstNameBox";

export function UseContextExample() {

  const { names, setNames } = useNameContext();

  const fullName = names.firstName + ' ' + names.lastName;
  const items: number[] = [...Array(1)];

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNames({...names, firstName: e.target.value});
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNames({...names, lastName: e.target.value});
  }

  return (
    <>
      <h2>using useContext()</h2>
      <label>
        First name:{' '}
        <input
          value={names.firstName}
          onChange={handleFirstNameChange}
        />  
      </label>
      <label>
        Last name:{' '}
        <input
          value={names.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      <br />
      <div>
        {items.map((item, i) =>
          <FirstNameBox key={i} />
        )}
      </div>
    </>
  )
};

