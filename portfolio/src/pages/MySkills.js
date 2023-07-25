import React from "react";
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import "../pages.css";

function Myskills() {
  return (
    <Container className="cardMyskills">
      <div className="myskillsTitle">
        <h1>My Skills and Expertise</h1>
        <p>
          I have a wide range of skills and expertise in the field of software
          development. Here are just a few of my key competencies
        </p>
      </div>

      <div className="listskills">
        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
          }}
        >
          <Card.Header>Front-End</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
          }}
        >
          <Card.Header>Back-End</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Java</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>Node.js</ListGroup.Item>
            <ListGroup.Item>Express.js</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
          }}
        >
          <Card.Header>Databases</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>MySQL</ListGroup.Item>
            <ListGroup.Item>MongoDB</ListGroup.Item>
            <ListGroup.Item>Oracle</ListGroup.Item>
            <ListGroup.Item>Springboost</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </Container>
  );
}

export default Myskills;
