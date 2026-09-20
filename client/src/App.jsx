import Home from "./pages/Home";
import Menu from "./pages/Menu";

import { Route, Router, Routes } from "react-router";
import Services from "./pages/Service";
import Locations from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
