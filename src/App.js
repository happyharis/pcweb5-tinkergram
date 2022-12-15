import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

const API = "https://pcweb5-api.haris-samingan.repl.co";
const POSTS = "/posts";

function ImageSquare({ post }) {
  const { image } = post;
  return (
    <Image
      src={image}
      style={{
        objectFit: "cover",
        width: "18rem",
        height: "18rem",
        marginTop: "2rem",
      }}
    />
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    try {
      const response = await axios.get(API + POSTS);
      const posts = response.data;
      console.log(posts);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const ImagesRow = () =>
    posts.map((post, index) => <ImageSquare key={index} post={post} />);
  return (
    <>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
          <Nav>
            <Nav.Link href="/add">New Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <ImagesRow />
        </Row>
      </Container>
    </>
  );
}

export default App;
