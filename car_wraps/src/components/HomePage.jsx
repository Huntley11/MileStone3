import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function HomePage() {
    return (
        <section className="homePage">
            <Navigation/>
            <div className="body">
                <Nav className="justify-content-end">
                    <Button className="buttons" variant="primary" size="lg">
                        <Link class="whtColor" to='/login'>Login</Link>
                    </Button>
                    <Nav.Item>
                        <Nav.Link href="/about" className="about-btn">About</Nav.Link>
                    </Nav.Item>
                </Nav>
                <br/>
            </div>
        </section>
    )
}

export default HomePage