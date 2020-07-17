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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
  ],
}
