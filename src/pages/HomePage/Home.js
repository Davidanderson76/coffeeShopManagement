import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SignInButton from "../../components/SignInButton";

function Home() {
  return (
    <div className="App App-header">
      <Container>
        <Row>
          <Col>
            <h1>HOME PAGE</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm>1</Col>
          <Col sm>2</Col>
          <Col sm>3</Col>
        </Row>
        <br></br>
        <Row>
          <Col></Col>
          <Col xl>
            <SignInButton />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
