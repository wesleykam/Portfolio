import './projectCard.css';

interface ProjectCardProps {
    name: string;
    image: string;
    description: string;
    tools: string[];
}

const projectCard = ({
    name,
    image,
    description,
    tools,
}: ProjectCardProps) => {
    return (
        <div className={`card ${name}`}>
            <div
                className="card-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <div className="card-text">
                <h4>{name}</h4>
                <p>{description}</p>

                <div className="tools">
                    {tools.map((tool) => (
                        <div key={tool} className="tool">
                            {tool}
                        </div>
                    ))}
                </div>
                <div className="show-more">
                    Show More
                    <div className="animated-underline" />
                </div>
            </div>
        </div>
    );
};

export default projectCard;
