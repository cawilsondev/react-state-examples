import { useEffect } from "react";

export function UsingJavascriptExample() {

  let firstName = '';
  let lastName = '';

  function onFirstNameChange(e: Event) {
    const target = e.target as HTMLInputElement;
    firstName = target.value;

    // call update on change
    updateFullName();
  }

  function onLastNameChange(e: Event) {
    const target = e.target as HTMLInputElement;
    lastName = target.value;

    // call update on change
    updateFullName();
  }

  const updateFullName = () => {
    const fullNameElement = document.getElementById('full-name') as HTMLElement;

    // old dodgy way of doing things
    fullNameElement.innerHTML = firstName + ' ' + lastName;
  }

  useEffect(() => {
    // set event listeners after load
    document.getElementsByName('firstName')[0].addEventListener('input', onFirstNameChange);
    document.getElementsByName('lastName')[0].addEventListener('input', onLastNameChange);
  });

  return (
    <>
      <h2>using Vanilla JS</h2>
      <label>
        First name:{' '}
        <input name='firstName' />
      </label>
      <label>
        Last name:{' '}
        <input name="lastName" />
      </label>
      <p>
        Your ticket will be issued to: <b id="full-name"></b>
      </p>
    </>
  )
}