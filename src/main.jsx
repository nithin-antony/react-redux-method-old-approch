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
