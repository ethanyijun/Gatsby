import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Come join us at an event in the future!"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Events</h1>
        <div>
          <Img fixed={data.bodyImage.childImageSharp.fixed} alt="robot" />
          <p>We attend and present at many events. Come join us!</p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    bodyImage: file(relativePath: { eq: "audi.png" }) {
      childImageSharp {
        fixed(width: 288) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
