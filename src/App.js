import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Click from "./components/Clicker";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

import { LinkContainer } from "react-router-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log(count);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>My React Showcase</h1>

      <Router>
        <Navbar bg="light" expand="lg">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/clicker">
              <Nav.Link>Clicker</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/clicker"
            element={<Click setCount={setCount} increment={increment} />}
          />
        </Routes>
      </Router>
      <footer>you have clicked the button {count} time!</footer>
    </div>
  );
}

export default App;
