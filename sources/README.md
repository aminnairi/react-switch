# @aminnairi/react-switch

A simple JavaScript-like switch component for React written in TypeScript

[![NPM](https://badgen.net/npm/v/@aminnairi/react-switch)](https://www.npmjs.com/package/@aminnairi/react-switch) [![Bundlephobia](https://badgen.net/bundlephobia/minzip/@aminnairi/react-switch)](https://bundlephobia.com/package/@aminnairi/react-switch)

[![Snyk](https://badgen.net/snyk/aminnairi/react-switch)](https://github.com/aminnairi/react-switch/blob/development/sources/package.json)

## Summary

- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [API](#api)
  - [Switch](#switch)
  - [Case](#case)
  - [Default](#default)
  - [DefaultSwitch](#defaultswitch)
- [License](#license)
- [Contributing](#contributing)
- [Changelog](#changelog)

## Requirements

- [Node](https://nodejs.org/en)
- [NPM](https://www.npmjs.com/)

[Back to summary](#summary).

## Quick Start

```bash
npm install react react-dom @aminnairi/react-switch
npm install --save-dev vite @types/react @types/react-dom
```

```bash
touch main.tsx
```

```typescript
import React, { useEffect, useState } from 'react'
import { Switch, Case, Default, DefaultSwitch } from "@aminnairi/react-switch";

interface Article {
  id: number;
  title: string;
  body: string;
}

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error("Unable to fetch articles."));
    }).then(json => {
      setArticles(json);
    }).catch((error: unknown) => {
      setError(String(error));
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Switch>
      <Case when={loading}>
        <p>Loading your articles, please wait...</p>
      </Case>
      <Case when={Boolean(error)}>
        <p>Something went wrong: {error}</p>
      </Case>
      <DefaultSwitch>
        <Case when={articles.length === 0}>
          <p>There is no articles to display.</p>
        </Case>
        <Case when={articles.length === 1}>
          <p>You have {articles.length} published article.</p>
        </Case>
        <Default>
          <p>You have {articles.length} published articles.</p>
        </Default>
      </DefaultSwitch>
    </Switch>
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

[Back to summary](#summary).

## API

[Back to summary](#summary).

### Switch

```typescript
import { ReactNode } from "react";

export interface SwitchProps {
  children: ReactNode;
}

export declare const Switch: ({ children }: SwitchProps) => ReactNode;
```

[Back to summary](#summary).

### Case

```typescript
import { ReactNode } from "react";

export interface CaseProps {
  when: boolean;
  children: ReactNode;
}

export declare const Case: ({ children }: CaseProps) => ReactNode;
```

[Back to summary](#summary).

### Default

```typescript
import { ReactNode } from "react";

export interface DefaultProps {
  children: ReactNode;
}

export declare const Default: ({ children }: DefaultProps) => ReactNode;
```

[Back to summary](#summary).

### DefaultSwitch

```typescript
import { ReactNode } from "react";

export declare const DefaultSwitch: ({ children }: SwitchProps) => ReactNode
```

[Back to summary](#summary).

## License

See [`LICENSE`](../LICENSE).

[Back to summary](#summary).

## Contributing

See [`CONTRIBUTING.md`](../CONTRIBUTING.md).

[Back to summary](#summary).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

[Back to summary](#summary).
