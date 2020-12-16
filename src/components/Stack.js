import React from "react";
import { Container, Row, Col } from "react-grid-system";
export default function Stack() {
  return (
    <div>
      <h1>STACK</h1>
      <Container>
        <Row>
          <Col sm={2}>
            <strong>Languages</strong>
          </Col>
          <Col sm={2}>
            <strong>Frontend</strong>
          </Col>
          <Col sm={2}>
            <strong>Backend</strong>
          </Col>
          <Col sm={2}>
            <strong>Database</strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
