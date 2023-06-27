import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";
import { ConfirmDialog } from "primereact/confirmdialog";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <ConfirmDialog className="red" rejectClassName="close" acceptClassName="accept" />
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);
