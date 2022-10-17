import React from "react"
import { Link } from "react-router-dom"


export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to='/front'>Front</Link></li>
        <li><Link to='/back'>Back</Link></li>
      </ul>
    </nav>
  )
}