# @aminnairi/react-switch

A simple JavaScript-like switch component for React written in TypeScript

## Requirements

- Node
- NPM

## Installation

```bash
npm install @aminnairi/react-switch
```

## Usage

```typescript
import React, { useState, useCallback, Fragment } from "react"
import { Switch, Case, Default } from "@aminnairi/react-switch";

export const Main = () => {

  return (
    <Fragment>
      <input type="text" value={name} onChange={updateName} />
      <Switch>
        <Case when={navigator.language === "fr"}>
          <h1>Bonjour !</h1>
        </Case>
        <Case when={navigator.language === "es"}>
          <h1>¡Holà!</h1>
        </Case>
        <Default>
          <h1>Hello!</h1>
        </Default>
      </Switch>
    </Fragment>
  );
};
```
