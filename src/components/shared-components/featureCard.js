import React from "react"
import Message from "../../assets/svg/comment.svg"
import { Link, useStaticQuery, graphql } from "gatsby"

const FeatureCard = ({ featBlog }) => {
  const { category, title, date, comment, img, slug } = featBlog

  const imgQuery = useStaticQuery(graphql`
    query image {
      image: file(relativePath: { eq: "img1.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const toKababCase = stringCase =>
    stringCase
      .replace(/\s/g, "-")
      .replace(/,/g, "")
      .replace(/!/g, "")
      .toLowerCase()
  return (
    <div
      className="m-1 w-100 bg-cover bg-norepeat bg-center"
      style={{
        backgroundImage: `url(${imgQuery.image.childImageSharp.fluid.src ||
          img})`,
      }}
    >
      <Link
        to={`/blog/${slug || toKababCase(title)}`}
        className="text-decoration-none"
      >
        <section
          className="feat-card py-5 px-4 d-flex align-items-end"
          style={{ height: "300px", background: "rgba(50, 50, 50, 0.7)" }}
        >
          <main className="blog-border py-2 px-4 w-100 text-center text-uppercase text-white">
            <p className="font-family-oden-r-b font-size-80 blog-color-category mb-1">
              {category.map(cat => `${cat} `)}
            </p>
            <h3 className="font-size-120 font-family-oden-r">{title}</h3>
            <section className="d-flex justify-content-between font-size-70 font-family-oden-r-l">
              <div className="feat-date">
                <span className="transparent-text text-capitalize">{date}</span>
              </div>
              <div className="d-flex align-items-center">
                <Message width="13" className="mr-1" fill="#e1a0a0" />
                <span className="transparent-text">{comment.length}</span>
              </div>
            </section>
          </main>
        </section>
      </Link>
    </div>
  )
}

export default FeatureCard
