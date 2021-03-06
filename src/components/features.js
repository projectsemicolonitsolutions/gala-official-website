import React from "react"
import { Container, Row, Col } from "reactstrap"
import ImgFeature from "./imgFeature"
import featureBg from "../images/feature-bg.png"
import shapeBg from "../images/shape.png"

const Features = () => {
  return (
    <section
      id="features"
      className="py-5 text-center"
      style={{
        backgroundImage: `url(${shapeBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section
        style={{
          backgroundImage: `url(${featureBg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" xs="11">
              <h2 className="font-family-quicksand-b text-gradient-red">
                Features
              </h2>
              <p className="font-family-quicksand-l text-secondary font-size-120">
                Marketing supply chain android angel inves tor leverage scrum
                project seed round valu proposition long tail disruptive release
                agile development mass market strategy foune angel investor
                ecosystem funding.
              </p>
            </Col>
          </Row>
          <Row className="flex-md-row flex-column-reverse pt-5">
            <Col md="6" xs="12">
              <ImgFeature />
            </Col>
            <Col md="6" xs="12" className="d-flex-center">
              <h2 className="font-family-quicksand-b text-gradient-red">
                Coming Soon ...
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default Features
