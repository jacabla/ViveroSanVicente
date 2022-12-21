import React from "react";

export default function Content() {
  return (
    <div class="container">
      <div class="card-image">
        <figure class="image is-10by10">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-1x1">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title ">John Smith</p>
            <p class="subtitle">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="www.google.com">@bulmaio</a>.
          <a href="www.google.com">#css</a>
          <a href="www.google.com">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
