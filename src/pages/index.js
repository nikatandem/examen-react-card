import * as React from "react"
import Layout from "../components/Layout"
import Card from "../components/card/card"
import {graphql } from "gatsby";
import "../components/card/card.css"

const IndexPage = ({data}) => {
 const imageMap = {};  
 data.allFile.nodes.forEach((file) => {
  imageMap[file.relativePath] = file.childImageSharp.gatsbyImageData;
});
 return (
   
    <>
    <Layout/>
    <div className="content">
    <h1 className="titulo-principal">Página de inicio</h1>
      <div className="card-container">
        {data.allTecnologiasJson.edges.map(({ node }) => {
          const image = imageMap[node.image]; 

          return (
            
            <Card
              key={node.id}
              title={node.title}
              description={node.description}
              image={image}
              link={node.link}
            />
            
          );
        })}
      </div>
      </div>
      
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allTecnologiasJson {
      edges {
        node {
          id
          title
          description
          link
          image  # El campo "image" es el nombre del archivo de imagen
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          width: 300
          height: 300
          backgroundColor: "white" 
          )
        }
      }
    }
  }
`;

export default IndexPage

