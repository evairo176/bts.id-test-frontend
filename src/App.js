import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routers/AppRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
