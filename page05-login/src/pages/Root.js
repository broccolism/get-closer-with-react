import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "../App";

function Root() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default Root;
