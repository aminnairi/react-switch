# @aminnairi/react-switch

A simple JavaScript-like switch component for React written in TypeScript

## Requirements

- [Node](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)

## Quick Start

```bash
npm install react react-dom @aminnairi/react-switch
npm install --save-dev vite @types/react @types/react-dom
```

```bash
touch main.tsx
```

```typescript
import React, { Fragment } from "react"
import { Switch, Case, Default } from "@aminnairi/react-switch";

export const Main = () => {
  return (
    <Fragment>
      <Switch>
        <Case when={navigator.language === "fr"}>
          <h1>Bonjour !</h1>
        </Case>
        <Case when={navigator.language === "es"}>
          <h1>¡Hola!</h1>
        </Case>
        <Default>
          <h1>Hello!</h1>
        </Default>
      </Switch>
    </Fragment>
  );
};
```

```bash
touch index.tsx
```

```typescript
import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./main";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <Main />
);
```

```bash
touch index.html
```

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="./index.tsx" type="module"></script>
  </body>
</html>
```

```bash
npx vite
```

## License

See [`LICENSE`](../LICENSE).
