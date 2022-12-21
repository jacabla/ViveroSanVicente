import React from "react";
import bulma from "bulma/css/bulma.css";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import "./components/styles/LoadingSpinner.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="spinner">
      {loading ? (
        <div>
          {" "}
          <ScaleLoader></ScaleLoader>
          <p>Bienvenidos a Vivero San Vicente</p>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Content></Content>} />
          </Routes>
          <Routes>
          <Route path="Content" element={<Content></Content>} /> 
            <Route path="Contact" element={<Contact></Contact>} />
            <Route path="Hero" element={<Hero></Hero>} />
            <Route path="Footer" element={<Footer></Footer>} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
