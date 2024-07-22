# useTransition

The `useTransition` hook is used to manage state transitions in a way that allows you to defer updates and keep your UI responsive during high-stress rendering.

## Example with `useTransition`

### Scenario

Imagine you have a large list and you want to filter it based on user input. Filtering the list can be an expensive operation, and using `useTransition` can help keep the UI responsive.

### Creating the Component

#### App.js

```jsx
import React, { useState, useTransition } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(generateList());
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    startTransition(() => {
      const filteredList = generateList().filter((item) => item.includes(newQuery));
      setList(filteredList);
    });
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const generateList = () => {
  // Simulating a large list
  return Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`);
};

export default App;
```

In this example, `useTransition` helps to keep the UI responsive by allowing the input change to occur immediately while deferring the state update for the filtered list. The `isPending` flag is used to show a loading indicator while the transition is in progress.
