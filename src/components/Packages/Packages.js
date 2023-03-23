import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div>
      <Container>
        <div
          className=" d-flex justify-content-center align-items-center my-5"
          style={{ height: "90svh" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Car Driving Lessons</Card.Title>
              <Card.Text>$200</Card.Text>

              <Link to={"/package/2"}>
                <Button variant="primary">Pay now</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="ms-2">
            <Card.Body>
              <Card.Title>Bike Driving Lessons</Card.Title>
              <Card.Text>$100</Card.Text>
              <Link to={"/package/1"}>
                <Button variant="primary">Pay now</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Packages;
