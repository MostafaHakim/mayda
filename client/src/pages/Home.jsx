import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="">
      <Navbar />
      {location.pathname === "/" ? <HomeComponent /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Home;
