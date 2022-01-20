import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import About from "../About/About"
import Education from "../Education/Education"
import Projects from "../Projects/Projects"
import Home from "../Home/Home"

export default function Header() {
    return (
        <BrowserRouter>

            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>My Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto cont">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/education"}>Education / Experience</Nav.Link>
                                <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/" element={<Home />} />

                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    )

}


