import React from "react";

export function Posteo({ post }) {
  return (
    <div className="card mb-3 w-100 ">
      <div className="row g-0">
        <div className="col-md-4">
          {post.imagen === null ? (
            <iframe
              className="img-fluid rounded-start"
              src={"https://www.youtube.com/embed/" + post.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={post.imagen}
              className="img-fluid rounded-start"
              alt={post.titulo}
            ></img>
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.titulo}</h5>
            <p className="card-text">{post.descripcion}</p>
            <p className="card-text">
              <small className="text-body-secondary">{post.fecha}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
