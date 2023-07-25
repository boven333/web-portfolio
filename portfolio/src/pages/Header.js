import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../pages.css";

function Header() {
  return (
    <Container className="containers">
      <div>
        <h1>My Programmer Portfolio</h1>
        <p>
          elcome to my portfolio! As a software developer, I am passionate about
          creating robust and user-friendly applications. Check out some of my
          work below.
        </p>
      </div>
    </Container>
  );
}

export default Header;
