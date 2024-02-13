import { Form, Button, Col, Row, Toast } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updatedLoginState } from '../../redux/app/appSlice';
import { LoginStates } from '../../shared/helpers/types';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(true);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .matches(/^Admin$/, 'Please enter the below mentioned credentials')
                .required('Please enter a username.'),
            password: Yup.string()
                .matches(/^Admin$/, 'Please enter the below mentioned credentials')
                .required('Please enter a password.')
        }),
        onSubmit: values => {
            values && dispatch(updatedLoginState(LoginStates.LOGGED_IN));
            navigate('/', { replace: true });
        }
    });
    useEffect(() => {
        if (Object.keys(formik.errors).length !== 0) {
            setShow(true);
        }
    }, [formik.errors]);

    return (
        <div className="LOGIN-COMPONENT">
            <div className="background-image"></div>
            <Col className="my-form-container ">
                <div className="my-form bg-white ">
                    <h2>Login</h2>
                    <Form noValidate onSubmit={formik.handleSubmit}>
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
                                isInvalid={!!(formik.touched.username && formik.errors.username)}
                            />
                            <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                {formik.errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Label className="text-muted">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter the password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="my-form-input"
                                isInvalid={!!(formik.touched.password && formik.errors.password)}
                            />
                            <Form.Control.Feedback type="invalid" className="my-form-feedback">
                                {formik.errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit" className="my-form-button">
                            Let's dive in
                        </Button>
                    </Form>
                    <Row>
                        <Col>
                            <Toast
                                onClose={() => {
                                    setShow(false);
                                    formik.resetForm();
                                }}
                                show={show}>
                                <Toast.Header>
                                    <strong className="me-auto">Enter the below credentials</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <li>
                                        <strong>Username:</strong> Admin
                                    </li>
                                    <li>
                                        <strong>Password:</strong> Admin
                                    </li>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
};

export default Login;
