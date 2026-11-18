import { Link } from "react-router-dom";
import "./HomeHeader.css";

function HomeHeader() {
    return (
        <header className="home-header">
            <Link to="/" className="home-logo">
                <div className="home-logo-icon">🏛️</div>

                <div className="home-logo-text">
                    <h2>EBank</h2>
                    <span>Digital Banking</span>
                </div>
            </Link>

            <div className="home-header-actions">
                <Link to="/login" className="home-login-btn">
                    Login
                </Link>

                <Link to="/login" className="home-header-btn">
                    Get Started
                </Link>
            </div>
        </header>
    );
}

export default HomeHeader;