import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <UserProvider>
          <App />
        </UserProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
