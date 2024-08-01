import ExperienceCard from '../../components/experienceCard/experienceCard';

import './experience.css';

const Experiences = [
    {
        name: 'Software Engineer Intern',
        company: 'Indigitous',
        location: 'Remote',
        timeframe: 'June 2024 - Present',
        description: ['Work in Progress'],
        tools: [],
    },
    {
        name: 'Product Support Engineer',
        company: 'zyBooks',
        location: 'Remote',
        timeframe: 'March 2022 - June 2024',
        description: [
            'Collaborated with 4+ cross-functional teams to identify, design, and implement improvements to the UX that reduced system and content errors by 20%',
            'Streamlined the payment system based on user pain point analysis of 10,000+ support and bug report tickets',
            'Compiled feature and content update suggestions that aimed to improve user learnability and usability, reducing ticket count by 10%',
            'Triaged user-reported bugs by independently filtering out or resolving over 80% before escalating the rest for specialized review.',
        ],
        tools: ['Python', 'C++', 'Java'],
    },
    {
        name: 'QA Engineer Intern',
        company: 'zyBooks',
        location: 'Remote',
        timeframe: 'June 2023 - September 2023',
        description: [
            'Developed automated front-end test scripts using Cypress to streamline the testing process and ensure code quality',
            'Refactored testing scripts to prevent non-deterministic results and increase efficiency, clearing tech debt',
            'Documented issues and proposed solutions to improve testing procedures and resolve problems revealed by tests',
            'Experienced Agile software development utilizing Scrum and Jira for team communication',
        ],
        tools: ['CypressJs'],
    },
    {
        name: 'Undergraduate Learning Assistant (Intro to Computer Science)',
        company: 'UCSB',
        location: 'Santa Barbara, CA',
        timeframe: 'March 2023 - June 2023',
        description: [
            'Led weekly Q&A sessions and office hours for 40+ students to clarify concepts and provide coding assistance',
            'Documented course material used by TAs and Professors to facilitate office hour discussions and to iterate future course design',
            'Collaborated directly with the professor to outline coding assignments, defining their scopes and timelines',
        ],
        tools: ['Python'],
    },
];

const experience = () => {
    return (
        <section className="experience-section">
            <div className="container experience-container">
                <div className="header experience-header">
                    <h3>Experience</h3>
                    <div className="underline" />
                </div>
                <div className="experience-cards">
                    {Experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            name={experience.name}
                            company={experience.company}
                            location={experience.location}
                            timeframe={experience.timeframe}
                            description={experience.description}
                            tools={experience.tools}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default experience;
