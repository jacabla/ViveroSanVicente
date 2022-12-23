import React from "react";
import { Link } from "react-router-dom";
import "./styles/FooterStyle.css";

function Nabvar() {
  return (
    <div className="menuVivero">
      <div>
        <nav
          class="navbar is-spaced"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <a href="https://bulma.io">
              <img className="viveroImg"
                src="./img/vivero.jpeg"
                width="112"
                height="28"
                alt="logo"
              />
            </a>
            <div className="menuVivero">
              <li>
                <span class="material-symbols-outlined">potted_plant</span>
                <Link to={"Contact"}>Contact</Link>
              </li>
              <li>
                <span class="material-symbols-outlined">grass</span>
                <Link to={"Content"}>Content</Link>
              </li>
              <li>
                <span class="material-symbols-outlined">yard</span>
                <Link to={"Hero"}>Galeria</Link>
              </li>
              <li>
                <span class="material-symbols-outlined">psychiatry</span>
                <Link to={"Footer"}>Footer</Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nabvar;
