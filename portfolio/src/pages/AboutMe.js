import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import "../pages.css";

function AboutMe() {
  return (
    <Container className="cardAboutMe">
      <Row className="titleAboutMe">
        <h1>About Me</h1>
        <p>
          elcome to my portfolio! As a software developer, I am passionate about
          creating robust and user-friendly applications. Check out some of my
          work below.
        </p>
      </Row>

      <div className="cardOfme">
        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
            margin: "0 1.5rem 0 0",
          }}
        >
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
              I received my Bachelor's degree in Software Engineering from XYZ
              University. My courses included algorithms, software design,
              database systems, and more.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
            margin: "0 1.5rem 0 0",
          }}
        >
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
              I received my Bachelor's degree in Software Engineering from XYZ
              University. My courses included algorithms, software design,
              database systems, and more.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            backgroundImage: "linear-gradient(45deg, #FFEBEE, #FFEBEE)",
            margin: "0 0 0 0",
          }}
        >
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
              I received my Bachelor's degree in Software Engineering from XYZ
              University. My courses included algorithms, software design,
              database systems, and more.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default AboutMe;
