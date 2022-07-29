import React from "react";
import "../style/maincontent.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function maincontent() {
  return (
    <div class="content">
      <Container>
        <Row className="fs-1 ">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row className="fs-1">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row className="fs-1">
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default maincontent;
