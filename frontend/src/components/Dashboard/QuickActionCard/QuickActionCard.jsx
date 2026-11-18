import { Link } from "react-router-dom";
import "./QuickActionCard.css";

function QuickActionCard({
    icon,
    title,
    description,
    path,
}) {
    return (
        <Link to={path} className="quick-action-card">
            <div className="quick-action-icon">
                {icon}
            </div>

            <div className="quick-action-content">
                <h3>{title}</h3>

                <p>{description}</p>
            </div>

            <span className="quick-action-arrow">
                →
            </span>
        </Link>
    );
}

export default QuickActionCard;