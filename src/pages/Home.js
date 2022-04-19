import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="App-header">
      <Row>
        <Col>
          <h1>HOME PAGE</h1>
        </Col>
      </Row>
      <Row>
        <Col sm>1</Col>
        <Col sm>2</Col>
        <Col sm>3</Col>
      </Row>
    </Container>
  );
}

export default Home;
