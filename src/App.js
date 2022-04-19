//COMPONENTS
import NavbarTop from "./components/NavbarTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import Error from "./pages/Error";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
