import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Share from "../components/share"
import "../styles/styles.css"

const ToothAche = ({ data }) => {
  const twitterHandle = ""
  const tags = []

  const banner = data?.banner?.childImageSharp?.fluid
  const bottle = data?.bottle?.childImageSharp?.fluid
  const main = data?.main?.childImageSharp?.fluid
  return (
    <div className="wrap">
      <div className="header">
        {/*   <Image fluid={logo} alt="logo" className="logo" /> */}
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
              <p>
                <span role="img" aria-label="5 stars review">
                  ⭐⭐⭐⭐⭐
                </span>
              </p>
            </div>
            <Image fluid={main} alt="main" />

            <div className="subtitle fancy">
              <span>
                <h1>Introduction</h1>
              </span>
            </div>
            <div className="introduction">
              <p>
                Prostate cancer is the most common cancer among men. This year,
                an estimated 191,930 men in the United States will be diagnosed
                with prostate cancer. Around 60% of cases are diagnosed in men
                over 65. The average age of diagnosis is 66 years. The disease
                rarely occurs in those younger than 40. The number of new cases
                diagnosed in black men is 60% higher than the number of new
                cases diagnosed in white men.
              </p>

              <p>
                Most prostate cancers (90%) are found when the disease is in
                only the prostate and nearby organs. This is referred to as the
                local or regional stage. Median age at diagnosis was 68 years.
              </p>
              <p>
                9% of patients were diagnosed between ages 45 and 54. 29%
                between 55 and 64. 36% between 65 and 74. 21% between 75 and 84.
                5% at 85 or older. Overall annual incidence was 159.3 per
                100,000 men
              </p>

              <p>
                During this period, the median age at death from PC was 80
                years, with 7% of deaths occurring between ages 55 and 64. 20%
                between 65 and 74. 41% between 75 and 84. and 30% at 85 or
                older. Overall annual death rate was 25.6 per 100,000 men.
              </p>
            </div>
          </div>
          <div>
            <div className="subtitle fancy">
              <span>
                <h1>Product Description</h1>
              </span>
            </div>
            <div className="img-text">
              <div className="description">
                <p>
                  VitalFlow is the only solution to your prostate issues. It is
                  an all-natural dietary supplement that treats the root cause
                  of prostate problems.When testosterone gets converted into
                  dihydrotestosterone called DHT. they create problems with
                  androgen
                </p>

                <p>
                  This is the root cause of prostate enlargement. Usually, when
                  a prostate gland enlarges, you face troubles in holding your
                  urine, it is so severe you might find yourself unable to
                  control and peeing in your underwear.
                </p>

                <p>
                  VitalFlow is formulated in such a way that it protects you
                  from <strong>BPH</strong>, <strong>DHT</strong> and bladder
                  problems It is engineered to fight the root cause of the
                  problem, which is also called inflammation in the prostate
                  gland. Inflammation is another reason why prostate glands
                  increase in size.
                </p>
              </div>
              <div className="product-image">
                <Image fluid={bottle} alt="3 bottles of vitalflow" />
              </div>
            </div>
          </div>
          <div>
            <div className="subtitle fancy">
              <span>
                <h1>Product Ingredients</h1>
              </span>
            </div>
            <div className="ingredients">
              <p>
                There are <strong>34 natural ingredients</strong> in Vital Flow
                and I am going to tell you about each one of them…
              </p>
              <ol style={{ listStyle: "none" }}>
                <li>
                  <p>
                    <strong>Saw Palmetto Berries:</strong> These berries prevent
                    your body from converting the good testosterone into DHT.
                    This stops the inflammation and helps turn your prostate to
                    normal size.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Graviola Leaf:</strong> The leaf is said to have
                    magical healthy properties that can reduce the prostate size
                    naturally.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Three Mushrooms – Maitake, Reishi &amp; Shiitake:
                    </strong>{" "}
                    The three Japanese mushrooms are extremely famous in
                    treating the worse prostate conditions. They can flush out
                    the <strong>DHT</strong> toxins from your body and free your
                    prostate from chemicals.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cat’s Claw:</strong> Cat’s claw is said to treat a
                    variety of bacterial infections. It keeps your organs free
                    from any infections so they remain healthy and heal
                    themselves.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Tomato Fruit Powder:</strong> Tomato Fruit Powder
                    has the properties of cleaning your blood naturally. It
                    flushes out any toxins in your blood and frees you from
                    harmful <strong>DHT</strong> and inflammation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Pygeum Africanum Bark:</strong> It prevents
                    inflammation and is an antimicrobial as well. It boosts
                    oxygen content in your blood and makes it free from toxins.
                    This helps in the process of relieving prostate issues.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Stinging Nettle Root:</strong> This root is said to
                    be a manhood booster. You may have heard of this ingredient
                    as a testosterone boosting agent. It boosts the good
                    testosterone and doesn’t let it convert in{" "}
                    <strong>DHT</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Red Raspberry Extract:</strong> It helps you remain
                    in the mood, boosts your sex drive, desire and vitality.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Natural Green Tea:</strong> Green tea is always good
                    but when it is natural, it is even better. It helps flush
                    out the toxins in urine so your prostate glands are relaxed
                    and reduced in size.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Broccoli Leaf Extracts:</strong> The nutritional
                    value of broccoli leaf extracts is so high it can easily
                    diminish prostate problems, that too without causing any
                    side-effects.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Selenium:</strong> Selenium helps the hidden{" "}
                    <strong>DHT</strong> come out from its hiding so the other
                    nutrients and your immunity can defeat it.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Vitamin E:</strong> Vitamin E is said to enhance
                    your overall health and protect you from falling ill.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Vitamin B6:</strong> Vitamin B6 kills any bacteria
                    that enters your body so you never have to worry about
                    bacterial infections down there.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Zinc:</strong> Zinc protects your prostate from{" "}
                    <strong>DHT’s</strong> attacks so you never have to worry
                    about peeing in your underwear again.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Copper:</strong> Copper protects you from prostate
                    cancer and prevents prostate problems from getting worse.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Plant Sterol Complex:</strong> It helps you keep
                    away from the danger of getting prostate problems once
                    cured.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>15 more herbs:</strong> A blend of these herbs will
                    manage, maintain and balance your body’s hormones and fight
                    off bacteria and <strong>DHT</strong> production.
                  </p>
                </li>
              </ol>
              <div className="banner1">
                <Image fluid={banner} alt="banner product" />
              </div>
            </div>
          </div>
          <div>
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
    bottles3: file(absolutePath: { regex: "/3bottles.png/" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    banner: file(absolutePath: { regex: "/banner.png/" }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    bottle: file(absolutePath: { regex: "/bottle.png/" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
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

    pack: file(absolutePath: { regex: "/pack.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    outro: file(absolutePath: { regex: "/outro.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    banner2: file(absolutePath: { regex: "/small-banner.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
