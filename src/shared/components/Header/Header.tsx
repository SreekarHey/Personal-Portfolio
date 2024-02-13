import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { updatedNavigationPage } from '../../../redux/app/appSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();
    const menuItems = [
        { name: 'HOME', link: 'HOME' },
        { name: 'ABOUT', link: 'ABOUT' },
        { name: 'SKILLS', link: 'SKILLS' },
        { name: 'PROJECTS', link: 'PROJECTS' },
        { name: 'CONTACT', link: 'CONTACT' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                className={`bg-body-tertiary navbar ${scrolled ? 'scrolled' : ''}`}>
                <Navbar.Brand href="/dashboard">
                    <div className="my-logo">
                        <img alt="Logo" src="/assests/Screenshot 2024-02-06 010553.png"></img>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        {menuItems.map(value => (
                            <Nav.Link onClick={() => dispatch(updatedNavigationPage(value.link))}>
                                {value.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
