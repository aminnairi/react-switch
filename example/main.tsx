import React, { ChangeEventHandler, useState, useCallback, Fragment } from 'react'
import { Switch, Case, Default } from "@aminnairi/react-switch";

export const Main = () => {
  const [name, setName] = useState("Amin");

  const updateName: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <Fragment>
      <input type="text" value={name} onChange={updateName} />
      <Switch>
        <Case when={name === "Jake"}>
          <h1>Hi Jake!</h1>
        </Case>
        <Case when={name === "Jane"}>
          <h1>Hi Jane!</h1>
        </Case>
        <Default>
          <h1>Hi stranger!</h1>
        </Default>
      </Switch>
    </Fragment>
  );
};
