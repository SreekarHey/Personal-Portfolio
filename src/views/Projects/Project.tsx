import { Card, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Project = () => {
    const cardImages = [
        { image: 'assests/IBM-Archive-Viewer-Image.png' },
        { image: 'assests/IBM-Archive-Viewer-Flowchart.png' },
        { image: 'assests/Blog-Data-Archiving.png' },
        { image: '' }
    ];
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
                <Col md={3} className="mb-3">
                    <Carousel
                        nextIcon={false}
                        prevIcon={false}
                        interval={4000}
                        indicators={false}
                        pause="hover"
                        style={{ width: '20rem', height: '20rem' }}>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    src="https://www.ibm.com/design/language/dce3f5b8db2c0ff04296123f424b3d41/core_blue50_on_black.svg"
                                    alt="Card image"
                                    style={{ width: '20rem', height: '20rem' }}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Archive Viewer</Card.Title>
                                    <Card.Text>
                                        <h4>IBM Inphosphere Optim Archive Viewer</h4>
                                    </Card.Text>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            height: '11rem',
                                            cursor: 'pointer'
                                        }}>
                                        <a href="https://www.ibm.com/downloads/cas/9XDO5EA8">
                                            <ArrowRight size={25} />
                                        </a>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://wallpaperaccess.com/full/1255561.jpg"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Archive Viewer</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Archive Viewer</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        IBM® InfoSphere® Optim Archive Viewer is a tool in the IBM InfoSphere Optim
                                        Archive family of products.
                                        <br />
                                        <br />
                                        IBM InfoSphere Optim solutions manage data from requirements to retirement.
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://i.pinimg.com/originals/1c/16/0e/1c160ef689d39c74195b6c0312312f92.gif"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Archive Viewer</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Archive Viewer</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://www.ibm.com/downloads/cas/9XDO5EA8">Check out for more info</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={3} className="mb-3">
                    <Carousel
                        nextIcon={false}
                        prevIcon={false}
                        interval={3000}
                        indicators={false}
                        style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    src="https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg"
                                    alt="Card image"
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Arch Lenz's</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Arch Lenz's</h3>
                                    </Card.Text>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            height: '11rem',
                                            cursor: 'pointer'
                                        }}>
                                        <a href="https://www.estuate.com/products/archlenz">
                                            <ArrowRight size={25} />
                                        </a>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://wallpapercave.com/wp/iup1gME.jpg"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Arch Lenz's</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Arch Lenz's</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        Access all your archived data with ArchLenz – an online tool that offers
                                        existing IBM Optim users to search and retrieve archived data instantly.
                                    </Card.Text>
                                    <Card.Text>Access to archived data files through a web-based dashboard</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://i.pinimg.com/originals/1c/16/0e/1c160ef689d39c74195b6c0312312f92.gif"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Arch Lenz's</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Arch Lenz's</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://www.estuate.com/products/archlenz">Check out for more info</a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={3} className="mb-3">
                    <Carousel
                        nextIcon={false}
                        prevIcon={false}
                        interval={2500}
                        pause="hover"
                        indicators={false}
                        style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    src="https://www.ibm.com/design/language/dce3f5b8db2c0ff04296123f424b3d41/core_blue50_on_black.svg"
                                    alt="Card image"
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Live Archiving</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Live Archiving</h3>
                                    </Card.Text>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            height: '11rem',
                                            cursor: 'pointer'
                                        }}>
                                        <a href="https://www.estuate.com/products/estuate-products-offerings">
                                            <ArrowRight size={25} />
                                        </a>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://w0.peakpx.com/wallpaper/304/42/HD-wallpaper-abstract-blue-abstract.jpg"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Live Archiving</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Live Archiving</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        They can boost performance, empower collaboration, and improve governance across
                                        applications, databases, and platforms. By managing data properly over its
                                        lifetime
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://i.pinimg.com/originals/1c/16/0e/1c160ef689d39c74195b6c0312312f92.gif"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>Live Archiving</Card.Title>
                                    <Card.Text>
                                        <h3>IBM Inphosphere Optim Live Archiving</h3>
                                    </Card.Text>
                                    <Card.Text>Ongoing project</Card.Text>
                                    <Card.Text>
                                        <a href="https://www.estuate.com/products/estuate-products-offerings">
                                            Check out for more info
                                        </a>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={3} className="mb-3">
                    <Carousel
                        nextIcon={false}
                        prevIcon={false}
                        interval={2000}
                        pause="hover"
                        indicators={false}
                        style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    src="https://i.pinimg.com/564x/b6/a4/ad/b6a4adfaaee891f63d388c8ca7f343ca.jpg"
                                    alt="Card image"
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>App's Portal</Card.Title>
                                    <Card.Text>
                                        <h3>Estuate App's Portal</h3>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://images.hdqwalls.com/download/the-shore-at-trekyllisvik-iceland-j7-320x480.jpg"
                                    alt="Card image"
                                />
                                <Card.ImgOverlay>
                                    <Card.Title>App's Portal</Card.Title>
                                    <Card.Text>
                                        <h3>Estuate Internal App's Portal</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        The InternalApps portal is a centralized platform designed to streamline access
                                        to various tools within an organization
                                    </Card.Text>
                                    <Card.Text>
                                        It serves as a hub where employees can conveniently access and manage the
                                        software applications necessary for their daily tasks.
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img
                                    style={{ cursor: 'pointer', width: '20rem', height: '20rem' }}
                                    src="https://i.pinimg.com/originals/1c/16/0e/1c160ef689d39c74195b6c0312312f92.gif"
                                    alt="Card image"
                                />

                                <Card.ImgOverlay>
                                    <Card.Title>App's Portal</Card.Title>
                                    <Card.Text>
                                        <h3>Estuate Internal App's Portal</h3>
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://cloudapps.estuate.com/#/login">Check out for more info</a>
                                    </Card.Text>
                                    <Card.Img
                                        src="assests/EstuateLogo.png"
                                        alt="Card image"
                                        style={{ width: '18rem', height: '6rem' }}
                                    />
                                </Card.ImgOverlay>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};
