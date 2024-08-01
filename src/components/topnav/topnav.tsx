import MenuCollapsed from '../menuCollapsed/menuCollapsed';
import './topnav.css';

const topnav = () => {
    return (
        <section className="topnav-section">
            <div className="container topnav-container">
                <h4 className="topnav-logo">Wesley Kam</h4>
                <div className="topnav-links">
                    <a href="#home">
                        Home
                        <div className="animated-underline"></div>
                    </a>
                    <a href="#about">
                        About
                        <div className="animated-underline"></div>
                    </a>
                    <a href="#skills">
                        Skills
                        <div className="animated-underline"></div>
                    </a>
                    <a href="#education">
                        Education
                        <div className="animated-underline"></div>
                    </a>
                    <a href="#experience">
                        Experience
                        <div className="animated-underline"></div>
                    </a>
                    <a href="#projects">
                        Projects
                        <div className="animated-underline"></div>
                    </a>
                </div>
                <div className="menu-collapsed">
                    <MenuCollapsed />
                </div>
            </div>
        </section>
    );
};

export default topnav;
