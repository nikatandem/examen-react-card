import * as React from "react"
import { Link } from "gatsby"

const Layout = () => {
  return (
    <>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   
    </>
  )
}

export default Layout

