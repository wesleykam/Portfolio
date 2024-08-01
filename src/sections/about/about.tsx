import './about.css';

const about = () => {
    return (
        <section className="about-section">
            <div className="container about-container">
                <div className="header about-header">
                    <h3>About</h3>
                    <div className="underline" />
                </div>
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image" />
                    </div>
                    <div className="about-text">
                        <p>
                            I'm a Fullstack Engineer and Designer based in Santa Barbara, CA. I specialize in building and
                            designing web applications that are both functional
                            and visually appealing. I have a strong passion for
                            creating products that are user-friendly and
                            accessible to everyone.
                        </p>
                        <p>
                            I have experience working with a variety of
                            technologies including React, Node.js, Express,
                            MongoDB, and more. I'm always looking to learn new
                            things and improve my skills as a developer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;
