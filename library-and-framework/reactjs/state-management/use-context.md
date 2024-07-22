# useContext

You can create a custom hook that uses the React Context API to manage global state. Here's how you can create and use a custom hook called `useMyState`.

## Step-by-Step Example

### 1. Create Context and Provider

#### MyStateContext.js

```jsx
import React, { createContext, useContext, useState } from "react";

const MyStateContext = createContext();

const MyStateProvider = ({ children }) => {
  const [state, setState] = useState("Hello, World!");

  return <MyStateContext.Provider value={[state, setState]}>{children}</MyStateContext.Provider>;
};

const useMyState = () => {
  const context = useContext(MyStateContext);
  if (!context) {
    throw new Error("useMyState must be used within a MyStateProvider");
  }
  return context;
};

export { MyStateProvider, useMyState };
```

### 2. Wrap Your App with the Provider

#### App.js

```jsx
import React from "react";
import { MyStateProvider } from "./MyStateContext";
import MyComponent from "./MyComponent";

const App = () => (
  <MyStateProvider>
    <MyComponent />
  </MyStateProvider>
);

export default App;
```

### 3. Consume the Context in a Component

#### MyComponent.js

```jsx
import React from "react";
import { useMyState } from "./MyStateContext";

const MyComponent = () => {
  const [state, setState] = useMyState();

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

### MyStateContext.js

```jsx
import React, { createContext, useContext, useState } from "react";

const MyStateContext = createContext();

const MyStateProvider = ({ children }) => {
  const [state, setState] = useState("Hello, World!");

  return <MyStateContext.Provider value={[state, setState]}>{children}</MyStateContext.Provider>;
};

const useMyState = () => {
  const context = useContext(MyStateContext);
  if (!context) {
    throw new Error("useMyState must be used within a MyStateProvider");
  }
  return context;
};

export { MyStateProvider, useMyState };
```

### App.js

```jsx
import React from "react";
import { MyStateProvider } from "./MyStateContext";
import MyComponent from "./MyComponent";

const App = () => (
  <MyStateProvider>
    <MyComponent />
  </MyStateProvider>
);

export default App;
```

### MyComponent.js

```jsx
import React from "react";
import { useMyState } from "./MyStateContext";

const MyComponent = () => {
  const [state, setState] = useMyState();

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("New Value")}>Change Value</button>
    </div>
  );
};

export default MyComponent;
```

### Summary

1. **MyStateContext.js**: Creates the context and custom hook.
2. **App.js**: Wraps the application with the provider.
3. **MyComponent.js**: Consumes the context using the custom hook.

This setup allows you to use `[state, setState] = useMyState()` in any component within your application, providing a simple way to manage global state.
