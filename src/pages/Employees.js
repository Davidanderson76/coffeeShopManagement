import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Employees() {
  return (
    <div className="App App-header">
      <Container>
        <Row>
          <Col>
            <h1>EMPLOYEES PAGE</h1>
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

export default Employees;
