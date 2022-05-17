import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Vehicle() {
  return (
    <div className="App App-header">
      <Container>
        <Row>
          <Col>
            <h1>VEHICLES PAGE</h1>
          </Col>
        </Row>
        <Row>
          <Col sm>1</Col>
          <Col sm>2</Col>
          <Col sm>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vehicle;
