# Steps to add redux into to react application

### _1. Installation of required dependencies such as install redux, react-redux_

`npm i redux react-redux`

### _2. Creation of Actions for reducer_

```
export const createTask = (task) => {
  return {
    type: "CREATE_TASK",
    task,
  };
};
```

### _3. Creation of reducer_

`Functions that accepts state and actions and return new state. These are pure functions`

```
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TASK":
      return [...state, { ...action.task }];
    default:
      return state;
  }
};

export default taskReducer;
```

[Normalizing State shape](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape).

### _4. Creation of root reducer_

```
import { combineReducers } from "redux";
import task from "./taskReducer";

const rootReducer = combineReducers({
  task: task,
});

export default rootReducer;
```

### _5. Create a redux store_

```
import { createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
```

### _6. Instantiate Store and Provide redux to react app_

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import confgureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = confgureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);

```

### _xx. Connect redux to component_

### _xx. Access redux state value in react application_

### _xx. Dispating action to update state_

### _xx. Unit testing_
