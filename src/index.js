import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ImageProvider } from "./context/image-context";

ReactDOM.render(
  <BrowserRouter>
    <ImageProvider>
      <App />
    </ImageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
