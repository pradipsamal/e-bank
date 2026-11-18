import "./ServiceCard.css";

function ServiceCard({ icon, title, description }) {
    return (
        <div className="service-card">
            <div className="service-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <a href="#services">
                Learn More →
            </a>
        </div>
    );
}

export default ServiceCard;