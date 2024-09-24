import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./card.css";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card-container">
      <h2 className="titulo-secundario">{title}</h2>
      <p className="texto-secundario">{description}</p>
      <div className="card-image-container">
     {image}
      </div>
      <button className="boton-primario">< a href={link} className="texto-btn">Saber más</a></button>
    </div>
  );
};

export default Card