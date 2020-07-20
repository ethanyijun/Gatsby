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
<<<<<<< HEAD

        {/* <li>
          <Link to={data.site.siteMetadata.eventLink}>Events</Link>
        </li>
        <li>
          <Link to={data.site.siteMetadata.aboutLink}>About</Link>
        </li> */}
=======
>>>>>>> 55d452322e710a607a716d97d9fd6880134fba01
      </ul>
    </nav>
  )
}

export default MainNav
