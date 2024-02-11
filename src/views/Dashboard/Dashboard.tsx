import { useSelector } from 'react-redux';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Home } from '../Home/Home';
import { Project } from '../Projects/Project';
import { Skills } from '../Skills/Skills';
import { useEffect } from 'react';

export const Dashboard = () => {
    const { navigationPage } = useSelector((s: any) => s.app);

    const scrollToElementById = (elementId: any) => {
        const element = document.getElementById(elementId);
        console.log(elementId, 'el');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            console.error(`Element with ID '${elementId}' not found.`);
        }
    };

    useEffect(() => {
        if (navigationPage) {
            scrollToElementById(navigationPage);
        }
    }, [navigationPage]);

    return (
        <div className="DASHBOARD-COMPONENT">
            <div id="HOME">
                <Home />
            </div>
            <div id="ABOUT">
                <About />
            </div>
            <div id="SKILLS">
                <Skills />
            </div>
            {/* <div id="PROJECTS">
                <Project />
            </div> */}
            <div id="CONTACT">
                <Contact />
            </div>
        </div>
    );
};
