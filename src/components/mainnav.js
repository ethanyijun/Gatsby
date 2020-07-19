import React from "react"
import { Link } from "gatsby"
import style from "./mainnav.module.css"

const MainNav = ({ menuLinks }) => {
  return (
    <nav className={style.navigation}>
      <ul>
        {menuLinks.map(props => (
          <li key={props.name}>
            <Link to={props.link}>{props.name}</Link>
          </li>
        ))}

        {/* <li>
          <Link to={data.site.siteMetadata.eventLink}>Events</Link>
        </li>
        <li>
          <Link to={data.site.siteMetadata.aboutLink}>About</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default MainNav
