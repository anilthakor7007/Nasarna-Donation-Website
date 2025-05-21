import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/main-component/App/App";
import reportWebVitals from "./reportWebVitals";
import "./css/font-awesome.min.css";
import "./css/themify-icons.css";
import "./css/flaticon.css";
import { AuthProvider } from "./context/user";
import { store } from '../src/store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);

reportWebVitals();
