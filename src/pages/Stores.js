import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Stores() {
  return (
    <div className="App App-header">
      <Container>
        <Row>
          <Col>
            <h1>STORES PAGE</h1>
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

export default Stores;
