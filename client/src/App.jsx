import Home from "./pages/Home";
import Menu from "./pages/Menu";

import { Route, Router, Routes } from "react-router";
import Services from "./pages/Service";
import Locations from "./pages/Location";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/menu" element={<Services />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
