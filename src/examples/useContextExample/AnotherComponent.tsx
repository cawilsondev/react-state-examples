import { useEffect, useState } from "react";
import { useNameContext } from "./useContextExampleProvider";

export function AnotherComponent() {

  const { names, setNames } = useNameContext();

  const [renders, setRenders] = useState(0);

  useEffect(() => {
    setRenders(r => r + 1);
  }, [names]);

  return (
    <>
      <h3>Another Component</h3>
      First name: { names.firstName }
      <br />
      Renders: { renders }
      <button onClick={() => setNames({...names, firstName: 'a name that was changed'})}>change name</button>
    </>
  );
};