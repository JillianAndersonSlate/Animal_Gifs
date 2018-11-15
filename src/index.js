import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Animals from "./components/animals";
import store from "./reducers";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Animals
        animals={[
          { name: "cat", emoji: "🐱" },
          { name: "dog", emoji: "🐶" },
          { name: "lion", emoji: "🦁" },
          { name: "horse", emoji: "🐴" },
          { name: "bear", emoji: "🐻" }
        ]}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
