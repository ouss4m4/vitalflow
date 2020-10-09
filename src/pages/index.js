import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Share from "../components/share"
import "../styles/styles.css"

const ToothAche = ({ data }) => {
  const twitterHandle = ""
  const tags = []
  const refLink = "#"
  const banner = data?.banner?.childImageSharp?.fluid
  const bottle = data?.bottle?.childImageSharp?.fluid
  const main = data?.main?.childImageSharp?.fluid
  const outro = data?.outro?.childImageSharp?.fluid
  const pack = data?.pack?.childImageSharp?.fluid
  const banner2 = data?.banner2?.childImageSharp?.fluid

  return (
    <div className="wrap">
      <div className="header">
        <div className="brand">
          <h1 className="brand-title">
            <span>🔎</span> Reviews Experts<span> 🔍</span>
          </h1>
        </div>
      </div>
      <div className="body-wrap">
        <div className="body">
          <div className="presentation">
            <h1 className="name">Vital Flow Review</h1>
            <div className="product-meta">
              <p> Created By: Sam Morgan</p>
              <p> Review Date: 02 October 2020</p>
              <p> Health Care </p>
              <p> 107 shares </p>
              <p>
                <span role="img" aria-label="5 stars review">
                  ⭐⭐⭐⭐⭐
                </span>
              </p>
            </div>
            <a href={refLink} target="_blank" rel="noreferrer">
              <Image fluid={main} alt="main" />
            </a>

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
                  dihydrotestosterone called <strong>DHT</strong>. they create
                  problems with androgen
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
                and Here are few on the list …
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
                    <strong> ... </strong> To read more about all the
                    ingredients that exist in this formula, The{" "}
                    <a href={refLink}>official website</a> has a detailed list
                    with all the information about the ingredients that we can
                    not list all in one summary for the sake of the review.
                  </p>
                </li>
              </ol>

              <div className="btn-wrap">
                <a
                  className="btn"
                  href="https://fabining-polives.icu/click"
                  target="_blank"
                >
                  Go to The Official Website
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="subtitle fancy">
              <span>
                <h1>How Does It Work ?</h1>
              </span>
            </div>
            <div className="how">
              <p>
                Vital Flow supplement reduce the size of the prostate gland and
                bring it back to normal. The use of natural ingredients ensures
                that older adults won’t experience any side effects that
                accompany surgical treatments and other medicinal procedures.
              </p>
              <p>
                When DHT levels rise higher than the average amount, the
                prostate gland may enlarge. Your body should respond accordingly
                and decrease the size. But, inflammation results in poor
                functioning of the body, and thus, your prostate gland will
                remain swollen. Perhaps inflammation results in more pain and
                swelling.
              </p>
              <p>
                When you start taking VitalFlow it will not take long to notice
                the change. In the first days the formula get absorbed at a fast
                pace due to the ingredients being all natural and green. when
                absorbed it will Stimulate your body to flush the built up
                DHT.therefore allowing the blood to be purified just like
                before. when your penile chambers are fed with purified and
                oxygenated blood,
              </p>
              <p>
                You will start peeing at a regular rate without difficulties and
                gaining back control of your bladder slowly. with the continuous
                use of VitalFlow your body will not start building up DHT again,
                this will stop any future inflammation of the prostate gland.
                and you can finally say goodbye to all your prostate problems
              </p>
            </div>
          </div>
          {/* <div>
            <div className="subtitle fancy">
              <span>
                <h1>Features</h1>
              </span>
            </div>
            <div className="container">
              <div className="bar learning" data-skill="TDD"></div>
              <div className="bar back basic" data-skill="Python"></div>
              <div className="bar back intermediate" data-skill="C#"></div>
              <div className="bar front advanced" data-skill="CSS3"></div>
              <div className="bar front expert" data-skill="HTML5"></div>
            </div>
          </div> */}
          <div>
            <h1 style={{ textAlign: "center" }}>PROs & CONs</h1>
            <div className="procon-wrap">
              <div className="procon">
                <ul className="pros">
                  <li>
                    <p>
                      VitalFlow is Made of 100% natural, Scientifically-Backed
                      ingredients with no side effects reported to date
                    </p>
                  </li>
                  <li>
                    <p>
                      Moreover, The Formula will boost your energy levels,
                      libido and metabolism.
                    </p>
                  </li>
                  <li>
                    <p>
                      Doesn’t require you to go through painful injections or
                      surgery
                    </p>
                  </li>
                  <li>
                    <p>60-day 100% money-back guarantee</p>
                  </li>
                </ul>
                <ul className="cons">
                  <li>
                    <p>
                      Only available online, which makes it accessible for only
                      a set of people
                    </p>
                  </li>
                  <li>
                    <p>
                      Minors can’t take this medicine, although prostate issues
                      are rare in people below 18.
                    </p>
                  </li>
                  <li>
                    <p>Discounted rates come only with bulk purchases</p>
                  </li>
                  <li>
                    <p>Stock limited production</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="subtitle fancy">
              <span>
                <h1>Work for Everyone?</h1>
              </span>
            </div>
            <div className="text-wrap">
              <p>
                No, the supplement only works for adult men. Minors shouldn’t
                use this product. Moreover, it only solves prostate issues, and
                only older adults suffer from this issue most of the time.
                Otherwise, all the ingredients used in the product are entirely
                natural. It won’t adversely affect any individual. If you are
                suffering from any prostate problem, this is the most viable
                solution you can have.
              </p>
            </div>
            <div class="pack-wrap">
              <a href={refLink} rel="noreferrer" target="_blank">
                <Image fluid={banner} alt="bottle pack" />
              </a>
            </div>
          </div>
          <div>
            <div className="subtitle fancy">
              <span>
                <h1>Where To Get It</h1>
              </span>
            </div>
            <div className="text-wrap">
              <p>
                VitalFlow is only available online on the{" "}
                <a href="">Official Website</a> ,There is a discount and the
                manufacturer also provide a money back guaranteed policy.just be
                sure to get your package from the official website as this
                product is only sold online. i will leave a link below.
              </p>
            </div>

            <div className="outro-wrap">
              <a href={refLink} rel="noreferrer" target="_blank">
                <Image fluid={outro} alt="banner" />
              </a>
            </div>
            <div class="pack-wrap">
              <a href={refLink} rel="noreferrer" target="_blank">
                <Image fluid={pack} alt="bottle pack" />
              </a>
            </div>
            <div class="pack-wrap">
              <a href={refLink} rel="noreferrer" target="_blank">
                <Image fluid={banner2} alt="bottle pack" />
              </a>
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
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    outro: file(absolutePath: { regex: "/outro.png/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
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
