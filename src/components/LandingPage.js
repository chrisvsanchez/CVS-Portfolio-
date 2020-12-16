import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
const LandingPage = () => {
  return (
    <div>
      <h1>LandingPage</h1>
      <h1>Chris V. Sanchez </h1>
      <Container>
        <Row>
          <Col sm={1}>
            <FaGithub />
          </Col>
          <Col sm={1}>
            <FaMedium />
          </Col>
          <Col sm={1}>
            <FaLinkedin />
          </Col>
          <Col sm={1}>
            <FaTwitter />
          </Col>
          <Col sm={1}>
            <FaEnvelope />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
