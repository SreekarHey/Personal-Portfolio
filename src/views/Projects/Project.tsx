import { Carousel, Col, Row } from 'react-bootstrap';

export const Project = () => {
    return (
        <div className="PROJECT-COMPONENT">
            <Row>
                <Col>
                    <Row>
                        <p className="contact-text">PROJECTS</p>
                    </Row>
                    <Row>
                        <div className="get-in-touch">Some of my recent projects</div>
                    </Row>
                    <Row>
                        <p className="feel-free-text">
                            These are some of my best projects , here I used React JS for my frontend and SASS,Tailwind
                            CSS for Styling .
                        </p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="carousel-container">
                        <Carousel data-bs-theme="dark" className="design-carosal">
                            <Carousel.Item>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg"
                                    alt="IBM Logo"
                                    className="d-block w-100"
                                />
                                <h1>First slide label</h1>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
