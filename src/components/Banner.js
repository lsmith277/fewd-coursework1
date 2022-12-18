import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/cooking.gif";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Lua Developer", "Honours Student"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="information" xs={12} md={6} xl={7}>
                        <span className="tagline">Hi There! 👀</span>
                        <h1>{`Hi, we're Cuisine!`}</h1>
                        <div className="about-me">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia facilisis sapien, non eleifend nisl eleifend vitae. Donec cursus suscipit ultrices. </p>
                        </div>
                    </Col>
                    <Col cs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}