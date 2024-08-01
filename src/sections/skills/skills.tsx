import './skills.css';

const skills = () => {
    return (
        <div>
            <section className="skills-section">
                <div className="container skills-container">
                    <div className="header skills-header">
                        <h3>Skills</h3>
                        <div className="underline" />
                    </div>
                    <div className="skills-content">
                        <div className="skills-text">
                            <div className="front-end">
                                <h4>Front-End</h4>
                                <ul className="skills-list">
                                    <li>React</li>
                                    <li>Typescript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                            <div className="back-end">
                                <h4>Back-End</h4>
                                <ul className="skills-list">
                                    <li>NodeJs</li>
                                    <li>ExpressJs</li>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                    <li>PostgresSQL</li>
                                </ul>
                            </div>
                            <div className="design">
                                <h4>Design</h4>
                                <ul className="skills-list">
                                    <li>Figma</li>
                                    <li>Webflow</li>
                                </ul>
                            </div>
                        </div>
                        <div className="skills-image-container">
                            <div className="skills-image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default skills;
