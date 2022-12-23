import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
<div className="tabs is-centered is-boxed is-medium">
  <ul>
    <li>
      <a>
        <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
        <Link to={'../Suculentas'}><span>Suculentas</span></Link>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
        <Link to={'../Colgantes'}><span>Colgantes</span></Link>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
        <Link to={'../Ornamentales'}><span>Ornamentales</span></Link>
      </a>
    </li>
    <li>
      <a>
        <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
        <Link to={'../Accesorios'}><span>Accesorios</span></Link>
      </a>
    </li>
  </ul>
</div>
  );
}
