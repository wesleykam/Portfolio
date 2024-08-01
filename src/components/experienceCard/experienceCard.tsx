import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './experienceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ExperienceCardProps {
    name: string;
    company: string;
    location: string;
    timeframe: string;
    description: string[];
    tools: string[];
}

const experienceCard = ({
    name,
    company,
    location,
    timeframe,
    description,
    tools,
}: ExperienceCardProps) => {
    const handleExpand = () => {
        const expandedCardContainer = document.getElementById(
            name + '-' + company
        ) as HTMLElement;
        const arrow = document.getElementById(
            'arrow' + name + company
        ) as HTMLElement;

        if (expandedCardContainer.style.maxHeight === '0px') {
            expandedCardContainer.style.maxHeight = '1000px';
            expandedCardContainer.classList.add('full');
            arrow.style.transform = 'rotate(180deg)';
            // expandedCardContainer.style.transform = 'scaleY(100%)';
        } else {
            expandedCardContainer.style.maxHeight = '0px';
            expandedCardContainer.classList.remove('full');
            arrow.style.transform = 'rotate(0deg)';
            // expandedCardContainer.style.transform = 'scaleY(0)';
        }
    };

    return (
        <div className="experience-card">
            <div className={`collapsed-card ${name}`} onClick={handleExpand}>
                <h5 className="experience-header">
                    <span className='experience-name'>{name}</span>
                    <span className='experience-company'>{' @ ' + company}</span>
                </h5>
                <p className='experience-timeframe'>{timeframe}</p>
                <div
                    id={'arrow' + name + company}
                    className="dropdown-arrow"
                    style={{ transform: 'rotate(0deg)' }}
                >
                    &#9660;
                </div>
            </div>
            <div
                id={name + '-' + company}
                className="expanded-card-container"
                style={{ maxHeight: '0px' }}
            >
                <div className={`expanded-card ${name}`}>
                    <h6>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <div>{location}</div>
                    </h6>
                    <ul className='description-points'>
                        {description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                        ))}
                    </ul>
                    <div className="tools">
                        {tools.map((tool) => (
                            <div key={tool} className="tool">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default experienceCard;
