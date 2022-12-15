import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./App.css";
import { API, POST } from "./constants";

export default function PostPageDetails() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();

  async function getPost(id) {
    const url = API + POST + `/${id}`;
    const response = await axios.get(url);
    const { caption, image } = response.data;
    setCaption(caption);
    setImage(image);
  }

  useEffect(() => {
    const id = params.id;
    getPost(id);
  });

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
        <Image src={image} style={{ width: "50%", height: "50%" }} />
        <p>{caption}</p>
      </Container>
    </>
  );
}
