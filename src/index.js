import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import UseAuth from "./UseAuth";
import { BrowserRouter } from "react-router-dom";
import { KeycloakContext } from './KeycloakContext'
import keycloak from './keycloak';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   
    <KeycloakContext.Provider value={keycloak}>
    <BrowserRouter>
     <UseAuth />
    </BrowserRouter>
    </KeycloakContext.Provider>
  </React.StrictMode>
);
