import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard() {
  return (
    <Card style={{ width: "18rem", marginTop: "2rem" }}>
      <Card.Img variant="top" src="https://zca.sg/img/1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Tinkergram</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <ImageCard />
          </Col>

          <div style={{ width: "580px" }}></div>
        </Row>
      </Container>
    </>
  );
}

export default App;
