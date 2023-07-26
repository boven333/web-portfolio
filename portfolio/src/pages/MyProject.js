import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "../pages.css";

function MyProject() {
    return (
        <Container className="cardMyproject">
            <div>
                <h1>My Projects</h1>
                <p>
                    Here are some of my most recent projects.
                </p>
            </div>

            <div className="cardShowcase">
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Mobile Application Development</Card.Title>
                        <Card.Text>
                            recently developed a mobile app for a local restaurant. The app allows customers to
                            easily browse the menu, place orders, and make reservations.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem'  }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Web Application Development</Card.Title>
                        <Card.Text>
                            I developed a web app for a financial services company. The app allows customers
                            to manage their accounts, make payments, and perform other tasks.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Software Development</Card.Title>
                        <Card.Text>
                            I developed an inventory management system for a manufacturing company. The system tracks inventory levels,
                            generates reports, and helps with ordering and restocking.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
            </div>

            <div className="cardShowcase">
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Mobile Application Development</Card.Title>
                        <Card.Text>
                            recently developed a mobile app for a local restaurant. The app allows customers to
                            easily browse the menu, place orders, and make reservations.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem'  }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Web Application Development</Card.Title>
                        <Card.Text>
                            I developed a web app for a financial services company. The app allows customers
                            to manage their accounts, make payments, and perform other tasks.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src="https://source.unsplash.com/random/100px70px" />
                    <Card.Body>
                        <Card.Title>Software Development</Card.Title>
                        <Card.Text>
                            I developed an inventory management system for a manufacturing company. The system tracks inventory levels,
                            generates reports, and helps with ordering and restocking.
                        </Card.Text>
                        <Button variant="danger">Demo</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default MyProject