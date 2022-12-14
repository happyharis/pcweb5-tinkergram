import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Tinkergram</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default App;
