import * as React from "react"
import Layout from "../components/Layout"
import Card from "../components/card/card"
import reactLogo from '../images/react.jpg'
import gatsbyLogo from '../images/gatsby.png'

const IndexPage = () => {
  return (
    <>
    <Layout/>
    <h1 className="titulo-principal">Página de inicio</h1>
  <Card
  title={"Aprende React"}
  description={"React es una biblioteca de JavaScript para construir interfaces de usuario"}
  image={reactLogo}
  link={"https://es.react.dev/"}
  
  ></Card>

<Card
  title={"Explora Gatsby"}
  description={"Gatsby es un framework basado en React que permite crear sitios web rápidos y modernos."}
  image={gatsbyLogo}
  link={"https://www.gatsbyjs.com/"}
  
  ></Card>
    </>
  )
}

export default IndexPage

