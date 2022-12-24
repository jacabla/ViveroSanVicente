import React from "react";

export default function (props) {
  const { titulo, imgSrc, descripcion } = props;
  return (
    <div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-128x128">
              <img src={imgSrc}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-2">{titulo}</p>
              </div>
            </div>
            <div className="content">{descripcion}</div>
          </div>
          <div class="modal">
        </div>
      </div>
      </div>
  );
}
