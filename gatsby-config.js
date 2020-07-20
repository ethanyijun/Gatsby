/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site!`,
    titleTemplate: `%s · a starting point`,
    author: {
      name: `Morten Rand-Hendriksen`,
      summary: `a ballroom dancer playing at being a developer.`,
    },
    description: `An opinionated starter for Gatsby`,
    url: `https://something.or.other`,
    logo: `static/logo.png`,
    twitter: `mor10`,
    menuLinks: [
      {
<<<<<<< HEAD
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Events",
        link: "/events",
=======
        name: `Home`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Events`,
        link: `/events`,
>>>>>>> 55d452322e710a607a716d97d9fd6880134fba01
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
<<<<<<< HEAD
        name: `pages`,
        path: `${__dirname}/content/images`,
=======
        name: `images`,
        path: `${__dirname}/content/images/`,
>>>>>>> 55d452322e710a607a716d97d9fd6880134fba01
      },
    },
  ],
}
