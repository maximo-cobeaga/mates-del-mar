import React from "react";

export function VideoIncio() {
  return (
    <div className="container text-center d-flex justify-content-center" >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/A0I84xU1fKI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
