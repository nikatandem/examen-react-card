import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./card.css";

const Card = ({ title, description, image, link }) => {
  return (
    
      <div className="card">
      <h2 className="titulo-secundario">{title}</h2>
      <div className="card-image-container">
        {image && <GatsbyImage image={image} alt={title} className="card-image" />}
      </div>
      <p className="texto-secundario">{description}</p>
      
      <button className="boton-primario">< a href={link} className="texto-btn">Saber más</a></button>

      
    </div>
  );
};

export default Card