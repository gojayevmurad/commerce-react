import { useRoutes } from "react-router-dom";
import "./app.scss";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import routes from "./routes";

function App() {
  return useRoutes(routes);
}

export default App;
