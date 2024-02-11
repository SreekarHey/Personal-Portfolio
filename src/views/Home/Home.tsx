import { useEffect, useState } from 'react';
import { Col, Row, Container, Modal } from 'react-bootstrap';
import { Whatsapp, Twitter, Github, Linkedin, TelephoneOutbound } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Home = () => {
    const skillsList = ['Frontend Developer', 'React Js Developer', 'Next JS Developer', 'JavaScript Developer'];
    const [smShow, setSmShow] = useState(false);

    const GetAnimatedText = ({ skillsList }: any) => {
        const [text, setText] = useState('');
        const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

        useEffect(() => {
            const skills = skillsList[currentSkillIndex];
            let index = -2;

            const intervalId = setInterval(() => {
                setText(prevText => prevText + skills[index]);
                index++;

                if (index === skills.length) {
                    index = -2;
                    setText('');

                    setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skillsList.length);
                }
            }, 200);

            return () => clearInterval(intervalId);
        }, [currentSkillIndex, skillsList]);

        return <div className="skills-list">{text.replaceAll('undefined', '')}</div>;
    };

    return (
        <>
            <div className="HOME-PAGE-CONTAINER">
                <Modal
                    size="sm"
                    centered
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">Contact me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <li>
                            Phone number : <strong>9731517107</strong>
                        </li>
                    </Modal.Body>
                </Modal>
                <Container>
                    <Row>
                        <Col>
                            <div className="beautiful-text">LET'S BUILD SOMETHING BEAUTIFUL</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="my-name">
                                Hi, I am <span className="name">Sreekar Manchali</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="skill">I am a</div>
                            <span className="skills-list">
                                <GetAnimatedText skillsList={skillsList} />
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="intro">
                            <p className="intro-paragraph">
                                I'm Sreekar Manchali, a proficient Frontend Developer with 3 years of experience.
                                Skilled in React, Typescript, and Next Js, I specialize in creating captivating and
                                scalable web applications. My track record reflects successful delivery across perse
                                projects, and I hold a degree from Ramaiah Institute of Applied Sciences. Let's
                                collaborate on your next exceptional project and let's build something great together
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="links-container">
                                <Link to="https://web.whatsapp.com/" target="_blank" className="link">
                                    <Whatsapp size={25} />
                                </Link>
                                <Link to="https://twitter.com/" target="_blank" className="link">
                                    <Twitter size={25} />
                                </Link>

                                <Link to="https://github.com/SreekarHey" target="_blank" className="link">
                                    <Github size={25} />
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/in/sreekar-m-34702b195/"
                                    target="_blank"
                                    className="link">
                                    <Linkedin size={25} />
                                </Link>
                                <div className="link">
                                    <TelephoneOutbound onClick={() => setSmShow(true)} size={25} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
