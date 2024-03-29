import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ChevronDoubleUp, Github, Linkedin, TelephoneOutbound, Twitter, Whatsapp } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const Contact = () => {
    const [smShow, setSmShow] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            subject: '',
            message: '',
            phoneNumber: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please enter a username.'),
            email: Yup.string().required('Please enter a email.'),
            subject: Yup.string().required('Please enter a subject.'),
            message: Yup.string().required('Please enter a message.'),
            phoneNumber: Yup.string().required('Please enter a phone number.')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="CONTACT-PAGE-CONTAINER">
            <Row>
                <Col>
                    <Row>
                        <p className="contact-text">CONTACT</p>
                    </Row>
                    <Row>
                        <div className="get-in-touch">Get in Touch</div>
                    </Row>
                    <Row>
                        <p className="feel-free-text">
                            Feel free to contact me for any opportunities, including contract work or simply to connect.
                            I'm passionate about discussing technologies and open to suggestions. As an aspiring
                            developer, I'm always eager to engage in meaningful conversations.
                        </p>
                    </Row>

                    <Row>
                        <Container>
                            <div className="main-container">
                                <Row>
                                    <Col md={6}>
                                        <div className="laptop-content">
                                            <img
                                                src="https://th.bing.com/th/id/OIP.-TfYhRuMqGR4J04SrMNhKAAAAA?w=450&h=286&rs=1&pid=ImgDetMain"
                                                alt="laptop-on-table"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="name-below-laptop">
                                            <h4>Sreekar Manchali</h4>
                                            <p>Frontend Web Developer</p>
                                            <span className="available-text">
                                                I am available for full time positions. Contact me and let's talk.
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '30px'
                                    }}>
                                    <div className="contact-links-container">
                                        <Link to="https://web.whatsapp.com/" target="_blank" className="link">
                                            <Whatsapp size={20} />
                                        </Link>
                                        <Link to="https://twitter.com/" target="_blank" className="link">
                                            <Twitter size={20} />
                                        </Link>

                                        <Link to="https://github.com/SreekarHey" target="_blank" className="link">
                                            <Github size={20} />
                                        </Link>
                                        <Link
                                            to="https://www.linkedin.com/in/sreekar-m-34702b195/"
                                            target="_blank"
                                            className="link">
                                            <Linkedin size={20} />
                                        </Link>
                                        <div className="link">
                                            <TelephoneOutbound onClick={() => setSmShow(true)} size={20} />
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Container>
                        <Row />
                    </Row>

                    <div className="get-in-contact">Get in Contact</div>
                    <p className="feel-free-text">
                        Feel free to contact me for any opportunities, including contract work or simply to connect. I'm
                        passionate about discussing technologies and open to suggestions. As an aspiring developer, I'm
                        always eager to engage in meaningful conversations.
                    </p>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={12}>
                            <Col className="forms-container">
                                <div className="form-content">
                                    <Form noValidate onSubmit={formik.handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="validationCustomUsername my-form-input">
                                                    <Form.Label className="text-muted ">Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter the username"
                                                        name="username"
                                                        value={formik.values.username}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className="my-form-input"
                                                        isInvalid={
                                                            !!(formik.touched.username && formik.errors.username)
                                                        }
                                                    />
                                                    <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                                        {formik.errors.username}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="my-form-input">
                                                    <Form.Label className="text-muted">Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter the phone number"
                                                        name="phoneNumber"
                                                        value={formik.values.phoneNumber}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className="my-form-input"
                                                        isInvalid={
                                                            !!(formik.touched.phoneNumber && formik.errors.phoneNumber)
                                                        }
                                                    />
                                                    <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                                        {formik.errors.phoneNumber}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label className="text-muted">Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter the email"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="my-form-input"
                                                isInvalid={!!(formik.touched.email && formik.errors.email)}
                                            />
                                            <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                                {formik.errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formGroupSubject">
                                            <Form.Label className="text-muted">Subject</Form.Label>
                                            <Form.Control
                                                type="subject"
                                                placeholder="Enter the subject"
                                                name="subject"
                                                value={formik.values.subject}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="my-form-input"
                                                isInvalid={!!(formik.touched.subject && formik.errors.subject)}
                                            />
                                            <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                                {formik.errors.subject}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="text-muted">Message</Form.Label>
                                            <Form.Control
                                                type="message"
                                                placeholder="Enter the message"
                                                name="message"
                                                rows={8}
                                                as="textarea"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="my-form-input"
                                                isInvalid={!!(formik.touched.message && formik.errors.message)}
                                            />
                                            <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                                {formik.errors.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Button type="submit" className="my-form-button">
                                            SEND MESSAGE
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="scroll-up">
                    <ChevronDoubleUp onClick={scrollToTop} size={30} />
                </div>
            </Row>
        </div>
    );
};
