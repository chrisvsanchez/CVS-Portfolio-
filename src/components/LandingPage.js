import React from "react";
import { Container, Row, Col } from "react-grid-csystem";
import {
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "gatsby";

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ height: "90vh", width: "90vw" }}>
      <div>
        <Container>
          <h1>Chris V. Sanchez </h1>
          <Row className="svg-container">
            <Col sm={1}>
              <Link to="https://github.com/chrisvsanchez">
                <FaGithub />
              </Link>
            </Col>
            <Col sm={1}>
              <Link to="https://medium.com/@chrisvsanchez">
                <FaMedium />
              </Link>
            </Col>
            <Col sm={1}>
              <Link to="https://www.linkedin.com/in/chrisvsanchez/">
                <FaLinkedin />
              </Link>
            </Col>
            <Col sm={1}>
              <Link to="https://twitter.com/chris_vsanchez">
                <FaTwitter />
              </Link>
            </Col>
            <Col sm={1}>
              <Link to="chrisvsanchez@gmail.com">
                <FaEnvelope />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default LandingPage;
