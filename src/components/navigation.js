import React from "react"
import { Link } from "gatsby"
import style from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
