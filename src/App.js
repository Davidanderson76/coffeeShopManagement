//COMPONENTS
import NavbarTop from "./components/NavbarTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";

import Stores from "./pages/Stores";
import Employees from "./pages/Employees";
import Equipment from "./pages/Equipment";
import Vehicle from "./pages/Vehicle";

//STYLING
import "./App.css";

function App() {
  return (
    <div>
      <NavbarTop />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/vehicles" element={<Vehicle />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
