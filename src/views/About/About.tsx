import { Col, Row } from 'react-bootstrap';

export const About = () => {
    return (
        <div className="ABOUT-PAGE-CONTAINER">
            <Row>
                <p className="about-text">ABOUT</p>

                <div className="wh0-i-am">Who am I?</div>

                <Col md={6}>
                    <div className="about-me-paragraph">
                        <p>
                            I am a software engineer and <span className="paragraph-style">Frontend developer</span>.
                            Initially, I focused on problem-solving before transitioning into a frontend developer
                            software engineer and Technical Writer. Over the last
                            <span className="paragraph-style"> three years</span>, I have gained considerable experience
                            in the technology industry.
                        </p>

                        <p>
                            <p>
                                Graduated from
                                <span className="paragraph-style"> Ramaiah University Of Appped Sciences </span>, a
                                esteemed institution as Electrical and Electronics Engineering.
                            </p>
                            {/* <p>
                                While my academic background pes in Electrical and Electronics Engineering, I have
                                cultivated a strong interest in computer science and coding. This interest led me to
                                actively engage in coding projects and explore various programming languages and
                                technologies. Through continuous learning and practical experience, I have developed
                                proficiency in software development and problem-solving within the computer science
                                domain.
                            </p> */}
                            <p>Learned through pair programming and project building.</p>
                            <p>
                                Worked with various technologies including
                                <span className="paragraph-style">HTML </span>,
                                <span className="paragraph-style">CSS </span>,
                                <span className="paragraph-style">JS </span>,
                                <span className="paragraph-style">React </span>,
                                <span className="paragraph-style">Next Js </span>
                                <span className="paragraph-style">JavaScript </span>, and
                                <span className="paragraph-style">Typescript </span> on project.
                            </p>
                        </p>

                        <p>
                            Additionally, I completed a software development program at JSpiders coaching center, I then
                            started working on my own projects and exploring new technologies like React, Typescript,
                            Next.js, Tailwind CSS ans SASS.
                        </p>

                        <p>
                            In the three past year, I have been part of product,
                            <span className="paragraph-style">
                                IBM Inposhpere Archive Viewer and Archlen's totaling devloping and Architecture the code
                                base.
                            </span>
                            I was the leading Frontend engineer for both projects where we built a robust application
                            which helped IBM for archiving the data in banking firms.
                        </p>

                        <p className="paragraph-style">Won "Star Performer" award in the team.</p>

                        <p>
                            I have worked at Estuate.Inc and Ironhwaks Technoliges, Bengaluru Karnataka as a Frontend
                            developer, building web-based solutions for real-world projects.
                        </p>
                    </div>
                </Col>
                <Col md={6} className="profile-picture-container">
                    <img
                        alt="profile-picture"
                        className="profile-picture"
                        src="assests/Sreekar-Profile-Picture-1.jpeg"></img>
                </Col>
            </Row>
        </div>
    );
};
