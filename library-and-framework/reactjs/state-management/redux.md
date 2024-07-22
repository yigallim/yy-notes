# Redux Setup with TypeScript

This markdown example outlines a simple Redux setup using TypeScript to manage a count state.

## Store Configuration

### `store.ts`

```typescript
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count/slice";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
```

## Hooks

### `hooks.ts`

```typescript
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <TSelected>(selector: (state: RootState) => TSelected) => TSelected =
  useSelector;
```

## Slice

### `count/slice.ts`

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CountState = {
  value: number;
};

const initialState: CountState = {
  value: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = countSlice.actions;
export default countSlice.reducer;
```

## Custom Hook

### `count/hook.ts`

```typescript
import { useAppSelector, useAppDispatch } from "../hooks";
import { increment, decrement, setCount, CountState } from "./slice";

const useCount = (): [CountState, () => void, () => void, (value: number) => void] => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count);

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const updateCount = (value: number) => {
    dispatch(setCount(value));
  };

  return [count, incrementCount, decrementCount, updateCount];
};

export default useCount;
```
