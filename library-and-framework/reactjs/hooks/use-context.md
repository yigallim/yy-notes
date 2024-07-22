# useContext

The React Context API is used for managing state globally in a React application, enabling you to share data across multiple components without having to pass props manually at every level.

## Creating a Context

First, create a context using `React.createContext()`:

```jsx
import React, { createContext } from "react";

const MyContext = createContext();
```

## Providing Context

Wrap your component tree with the `Context.Provider` and pass the value you want to share:

```jsx
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState("Hello, World!");

  return <MyContext.Provider value={{ state, setState }}>{children}</MyContext.Provider>;
};

export default MyProvider;
```

## Consuming Context

You can consume the context using the `useContext` hook:

```jsx
import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("New Value")}>Change Value</button>
    </div>
  );
};

export default MyComponent;
```

## Full Example

Here is a full example integrating the above concepts:

### MyContext.js

```jsx
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState("Hello, World!");

  return <MyContext.Provider value={{ state, setState }}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
```

### App.js

```jsx
import React from "react";
import { MyProvider } from "./MyContext";
import MyComponent from "./MyComponent";

const App = () => (
  <MyProvider>
    <MyComponent />
  </MyProvider>
);

export default App;
```

### MyComponent.js

```jsx
import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("New Value")}>Change Value</button>
    </div>
  );
};

export default MyComponent;
```

This example demonstrates how to create and consume context using the React Context API and `useContext` hook. You may check out another cleaner way to manage global state [examples](/foo/) here.
