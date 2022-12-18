import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chef from "../assets/img/restaurant.jpg";

export const About = () => {
      return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="about-bx">
                            <h2>
                                About Us
                            </h2>
                            <img src={chef} class="about-logo" alt="waitress"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia facilisis sapien, non eleifend nisl eleifend vitae. Donec cursus suscipit ultrices. Maecenas lobortis augue augue. Fusce nibh augue, gravida eu convallis vel, egestas in tortor. Pellentesque finibus ultricies magna, eget varius mi vulputate non. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} /> */}
        </section>
      )
}