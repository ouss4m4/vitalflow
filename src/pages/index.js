import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Share from "../components/share"
import "../styles/styles.css"

const ToothAche = ({ data }) => {
  const twitterHandle = ""
  const tags = []

  const avatar = data?.avatar?.childImageSharp?.fluid
  const video = data?.video?.childImageSharp?.fluid
  const logo = data?.logo?.childImageSharp?.fluid
  const main = data?.main?.childImageSharp?.fluid
  return (
    <div className="wrap">
      <div className="header">
        <Image fluid={logo} alt="logo" className="logo" />
        <div className="brand">
          <h1 className="brand-title">🔎Keen Reviews🔍</h1>
        </div>
      </div>
      <div className="body-wrap">
        <div className="body">
          <div className="presentation">
            <h1 className="name">Vital Flow Review</h1>
            <div className="product-meta">
              <p>created by: Sam Morgan</p>
              <p> review date: 02 October 2020</p>
              <p> Health care </p>
              <p> 102 shares </p>
              <p> ⭐⭐⭐⭐⭐</p>
            </div>
            <Image fluid={main} alt="main" />

            <p>
              Prostate cancer is the most common cancer among men. This year,<br/> an
              estimated 191,930 men in the United States will be diagnosed with
              prostate cancer. Around 60% of cases are diagnosed in men over 65.
              The average age of diagnosis is 66 years. The disease rarely
              occurs in those younger than 40. The number of new cases diagnosed
              in black men is 60% higher than the number of new cases diagnosed
              in white men.
            </p>
            <p>
              An estimated 191,930 men in the United States will be diagnosed
              with prostate cancer.
            </p>

            <p>
              Around 60% of cases are diagnosed in men over 65. The average age
              of diagnosis is 66 years. The disease rarely occurs in those
              younger than 40. The number of new cases diagnosed in black men is
              60% higher than the number of new cases diagnosed in white men.
            </p>

            <p>
              Most prostate cancers (90%) are found when the disease is in only
              the prostate and nearby organs. This is referred to as the local
              or regional stage.
            </p>

            <p>
              Median age at diagnosis was 68 years; 9% of patients were
              diagnosed between ages 45 and 54, 29% between 55 and 64, 36%
              between 65 and 74, 21% between 75 and 84, and 5% at 85 or older.
              Overall annual incidence was 159.3 per 100,000 men.
            </p>

            <p>
              During this period, the median age at death from PC was 80 years,
              with 7% of deaths occurring between ages 55 and 64; 20% between 65
              and 74; 41% between 75 and 84; and 30% at 85 or older. Overall
              annual death rate was 25.6 per 100,000 men.
            </p>
          </div>
          <div className="description">
            <p class="subtitle fancy">
              <span>Product Description</span>
            </p>

            <p>
              VitalFlow is the only solution to your prostate issues. It is an
              all-natural dietary supplement that treats the root cause of
              prostate problems.
            </p>
          </div>

          <div className="description">
            --Pros Cons--
            <div style={{ display: "flex" }}>
              <ul>
                <li>
                  <p>hellohello</p>
                </li>
                <li>
                  <p>hellohello</p>
                </li>
                <li>
                  <p>hellohello</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>hellohello</p>
                </li>
                <li>
                  <p>hellohello</p>
                </li>
                <li>
                  <p>hellohello</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToothAche

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fluid(maxWidth: 180) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    logo: file(absolutePath: { regex: "/sbplogo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 80, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    video: file(absolutePath: { regex: "/sbp-video.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    main: file(absolutePath: { regex: "/main.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
