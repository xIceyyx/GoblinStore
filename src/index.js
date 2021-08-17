// React
import React from "react";
import ReactDOM from "react-dom";
//

// Redux
import { Provider } from "react-redux";
import store from "./store/index";
//

// Components
import App from "./App";

// CSS
import "./index.css";
//

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
