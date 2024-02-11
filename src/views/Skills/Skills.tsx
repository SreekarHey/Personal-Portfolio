import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Skills = () => {
    const skills = [
        { name: 'HTML', imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        {
            name: 'CSS',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
        },
        {
            name: 'SCSS',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'
        },
        {
            name: 'JAVASCRIPT',
            imageUrl:
                'data:image/png;base64,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'
        },
        {
            name: 'REACT JS',
            imageUrl: 'assests/download-2.png'
        },
        { name: 'NEXT JS', imageUrl: 'assests/NEXTJS.png' },
        {
            name: 'TAILWIND CSS',
            imageUrl:
                'data:image/png;base64,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'
        },
        {
            name: 'TYPESCRIPT',
            imageUrl: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'
        }
    ];
    return (
        <>
            <div className="SKILL-PAGE-CONTAINER">
                <Row>
                    <Row>
                        <p className="skill-text">SKILLS</p>
                    </Row>
                    <Row>
                        <div className="what-i-do">What I can do</div>
                    </Row>
                    <Col>
                        <Row>
                            {skills.map((skill, index) => (
                                <Col lg={3} md={6} sm={12} key={index}>
                                    <div className="mini-card-container">
                                        <div className="html-image">
                                            <img src={skill.imageUrl} alt={skill.name} />
                                        </div>
                                        <div className="html-text">{skill.name}</div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};
