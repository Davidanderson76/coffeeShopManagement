//COMPONENTS
import NavbarTop from "./components/NavbarTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import Error from "./pages/ErrorPage/Error";

import Stores from "./pages/StoresPage/Stores";
import Employees from "./pages/EmployeePage/Employees";
import Equipment from "./pages/EquipmentPage/Equipment";
import Vehicle from "./pages/VehiclePage/Vehicle";

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
