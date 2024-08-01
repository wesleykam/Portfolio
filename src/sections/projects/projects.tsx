import ProjectCard from '../../components/projectCard/projectCard';
import Schedupile from '../../assets/schedupile.png';
import CouchPotatoes from '../../assets/couch-potatoes-home.png';
import Skeleports from '../../assets/skelesports-home.png';

import './projects.css';

const projects = () => {
    return (
        <section className="projects-section">
            <div className="container projects-container">
                <div className="header projects-header">
                    <h3>Projects</h3>
                    <div className="underline" />
                </div>
                <div className="project-cards">
                    <ProjectCard
                        name="Skelesports"
                        image={Skeleports}
                        description="Coaching Assistant"
                        tools={['Figma']}
                    />
                    <ProjectCard
                        name="Couch Potatoes"
                        image={CouchPotatoes}
                        description="Micro Job Marketplace"
                        tools={['Kotlin', 'Firebase', 'Android']}
                    />
                    <ProjectCard
                        name="Schedupile"
                        image={Schedupile}
                        description="Group Event Scheduling Tool"
                        tools={['React', 'NodeJs', 'Express', 'MongoDB']}
                    />
                </div>
            </div>
        </section>
    );
};

export default projects;
