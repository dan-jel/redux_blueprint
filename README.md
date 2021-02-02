## Redux Integration for React

```bash
npm install redux react-redux
```

to install the dependecies

<br>
<br>

## Imports

---

<br>

```javascript
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
```

import the dependencies in the `index.js` file in the root directory

import `allReducers` from "./reducers" if it is named "index.js".

<br>
<br>

## allReducers

---

<br>

```javascript
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default allReducers;
```

`allReducers` just bundeles multiple reducers using the `combineReducers` function from redux because the `createStore` function by default just takes in one reducer.

<br>
<br>

## create the Store

---

<br>

```javascript
const store = createStore(allReducers);
```

> window.**REDUX_DEVTOOLS_EXTENSION** &&window.**REDUX_DEVTOOLS_EXTENSION**()

to easily check your state using the redux devtools browserextension

<br>
<br>

## example Reducer

---

<br>

```javascript
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
```

- defining a `default` case, which in this case just returns the `initial state`
- defining diffrente cases for `decrementing` and `incrementing` the state by 1

<br>
<br>

## using the Store

---

<br>

```javascript
import { useSelector, useDispatch } from "react-redux";
```

```javascript
const counter = useSelector((store) => store.counter);
const dispatch = useDispatch();
```

<br>

- `useSelector` lets you read the state properties
- `useDispatch` lets you use the defined cases

<br>

```html
<h1>counter: {counter}</h1>
```

```html
<button onClick={() => {dispatch({ type: "INCREMENT" })}}>
```
