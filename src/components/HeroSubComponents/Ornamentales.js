import React from "react";
import Hero from "../Hero";
import Tarjeta from "./Tarjeta";
import Ornamental1 from "../img/1.jpg";
import Ornamental2 from "../img/2.jpg";
import Ornamental3 from "../img/3.jpg";
import Ornamental4 from "../img/4.jpg";
import Ornamental5 from "../img/5.jpg";
import Ornamental6 from "../img/6.jpg";
import Ornamental7 from "../img/9.jpg";
import Ornamental8 from "../img/10.jpg";
import Ornamental9 from "../img/11.jpg"

export default function Ornamentales() {

  return (
    <div>
      <Hero></Hero>
       <h1>Nuestra galeria de Ornamentales que te van a encantar</h1>
      <div className="columns">
        <div className="column is-4">
          <Tarjeta
            titulo={"Ornamental1"}
            descripcion={"soy la descripcion1"}
            imgSrc={Ornamental1}
            ></Tarjeta>
        </div>
        <div className="column is-4">
          <Tarjeta
            titulo={"Ornamental2"}
            descripcion={"soy la descripcion2"}
            imgSrc={Ornamental2}
          ></Tarjeta>
        </div>
        <div className="column is-4">
          <Tarjeta
            titulo={"Ornamental3"}
            descripcion={"soy la descripcion3"}
            imgSrc={Ornamental3}
          ></Tarjeta>
        </div>
        </div>
        <div className="columns">
        <div className="column">
          <Tarjeta
            titulo={"Ornamental4"}
            descripcion={"soy la descripcion4"}
            imgSrc={Ornamental4}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Ornamental5"}
            descripcion={"soy la descripcion5"}
            imgSrc={Ornamental5}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Ornamental6"}
            descripcion={"soy la descripcion6"}
            imgSrc={Ornamental6}
          ></Tarjeta>
        </div>
        </div>
        <div className="columns">
        <div className="column">
          <Tarjeta
            titulo={"Ornamental7"}
            descripcion={"soy la descripcion7"}
            imgSrc={Ornamental7}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Ornamental8"}
            descripcion={"soy la descripcion8"}
            imgSrc={Ornamental8}
          ></Tarjeta>
        </div>
        <div className="column">
          <Tarjeta
            titulo={"Ornamental9"}
            descripcion={"soy la descripcion9"}
            imgSrc={Ornamental9}
          ></Tarjeta>
        </div>
        </div> 
    </div>
  );
}
