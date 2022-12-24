import React from "react";
import Hero from "../Hero";
import Tarjeta from "./Tarjeta";
import suculenta1 from "../img/1.jpg";
import suculenta2 from "../img/2.jpg";
import suculenta3 from "../img/3.jpg";
import suculenta4 from "../img/4.jpg";
import suculenta5 from "../img/5.jpg";
import suculenta6 from "../img/6.jpg";
import suculenta7 from "../img/9.jpg";
import suculenta8 from "../img/10.jpg";
import suculenta9 from "../img/11.jpg"

export default function Suculentas() {

  return (
    <div>
      <Hero></Hero>
      <h1>Nuestra galeria de suculentas que te van a encantar</h1>
      <div className="columns">
        <div className="column is-4">
          <Tarjeta
            titulo={"Suculenta1"}
            descripcion={"soy la descripcion1"}
            imgSrc={suculenta1}
          ></Tarjeta>
        </div>
        <div className="column is-4">
          <Tarjeta
            titulo={"Suculenta2"}
            descripcion={"soy la descripcion2"}
            imgSrc={suculenta2}
          ></Tarjeta>
        </div>
        <div className="column is-4">
          <Tarjeta
            titulo={"Suculenta3"}
            descripcion={"soy la descripcion3"}
            imgSrc={suculenta3}
          ></Tarjeta>
        </div>
        </div>
        <div className="columns">
        <div className="column">
          <Tarjeta
            titulo={"Suculenta4"}
            descripcion={"soy la descripcion4"}
            imgSrc={suculenta4}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Suculenta5"}
            descripcion={"soy la descripcion5"}
            imgSrc={suculenta5}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Suculenta6"}
            descripcion={"soy la descripcion6"}
            imgSrc={suculenta6}
          ></Tarjeta>
        </div>
        </div>
        <div className="columns">
        <div className="column">
          <Tarjeta
            titulo={"Suculenta7"}
            descripcion={"soy la descripcion7"}
            imgSrc={suculenta7}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Suculenta8"}
            descripcion={"soy la descripcion8"}
            imgSrc={suculenta8}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Suculenta9"}
            descripcion={"soy la descripcion9"}
            imgSrc={suculenta9}
          ></Tarjeta>
        </div>
        </div>    
      </div>
  );
}
