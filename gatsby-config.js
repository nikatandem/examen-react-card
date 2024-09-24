/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://examen-react-veronica.netlify.app/`,
    author: `Veronica`,
    title: `Examen react card`,
    description:`Manejando react utilizando el framework gatsby`,
  },
    plugins: [


   
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/data/`,
        },
      },
      
      `gatsby-plugin-sharp`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,


    ],
  }
