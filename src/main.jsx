// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 
"react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
