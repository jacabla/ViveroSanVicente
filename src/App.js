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
import Accesorios from "./components/HeroSubComponents/Accesorios";
import Colgantes from "./components/HeroSubComponents/Colgantes";
import Ornamentales from "./components/HeroSubComponents/Ornamentales";
import Suculentas from "./components/HeroSubComponents/Suculentas";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            <Route path="Hero" element={<Suculentas></Suculentas>} />
            <Route path="Accesorios" element={<Accesorios></Accesorios>}></Route>
            <Route path="Colgantes" element={<Colgantes></Colgantes>}></Route>
            <Route path="Ornamentales" element={<Ornamentales></Ornamentales>}></Route>
            <Route path="Suculentas" element={<Suculentas></Suculentas>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default App;
