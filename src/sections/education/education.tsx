import './education.css';

const education = () => {
    return (
        <section className="education-section">
            <div className="container education-container">
                <div className="header education-header">
                    <h3>Education</h3>
                    <div className="underline" />
                </div>

                <div className="school">
                    <div>
                        <div className="name-timeframe">
                            <h5>University of California, Santa Barbara</h5>
                            <p>March 2024</p>
                        </div>
                        <div className="degree">
                            <h5>Bachelor of Science</h5>
                        </div>
                    </div>
                    <div className="major-GPA">
                        <div>
                            <p>Computer Science</p>
                        </div>
                        <div>
                            <p>GPA: 3.81</p>
                        </div>
                    </div>
                    <div className="courses">
                        <p>
                            Relevant Coursework: Data Structures & Algorithms,
                            Object Oriented Programming, Applications
                            Programming
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default education;
