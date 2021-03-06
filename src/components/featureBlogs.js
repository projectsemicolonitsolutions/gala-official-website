import React from "react"
import { Row, Col } from "reactstrap"
import FeatureCard from "./shared-components/featureCard"
import { Link } from "gatsby"

const FeatureBlogs = ({ blogs }) => {
  return (
    <section className="feature-blogs">
      <Row className="pt-10 m-0 px-3">
        <Col
          xs="12"
          className="d-flex justify-content-end font-size-80 text-secondary"
        >
          <Link to="blog/featured" className="text-decoration-none text-reset">
            View all
          </Link>
        </Col>
      </Row>
      <Row className="mr-0 mb-3 px-3 px-lg-3 px-md-5 flex-nowrap overflow-auto hide-scroll">
        {blogs.map(blog => (
          <Col md="4" sm="5" xs="11" key={blog.id}>
            <FeatureCard featBlog={blog} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeatureBlogs
