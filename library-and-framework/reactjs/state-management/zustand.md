# Zustand Setup for Counter State

This markdown example outlines how to set up a simple state management using Zustand for a counter state.

## Store Configuration

### `store.ts`

```typescript
import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
```

## Usage in a Component

### `App.tsx`

```typescript
import React from "react";
import { useCounterStore } from "./store";

const App: React.FC = () => {
  const { count, increment, incrementAsync, decrement } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
```
