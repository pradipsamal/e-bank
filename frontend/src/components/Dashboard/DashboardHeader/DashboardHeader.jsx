import { Link } from "react-router-dom";
import "./DashboardHeader.css";

function DashboardHeader() {
    return (
        <header className="dashboard-header">
            <div className="dashboard-header-left">
                <Link to="/dashboard" className="dashboard-logo">
                    <div className="dashboard-logo-icon">
                        🏛️
                    </div>

                    <div>
                        <strong>EBank</strong>
                        <span>Digital Banking</span>
                    </div>
                </Link>
            </div>

            <div className="dashboard-header-right">
                <button
                    type="button"
                    className="dashboard-notification"
                    aria-label="Notifications"
                >
                    🔔
                    <span></span>
                </button>

                <div className="dashboard-user">
                    <div className="dashboard-avatar">
                        CN
                    </div>

                    <div className="dashboard-user-info">
                        <strong>Chandan Nayak</strong>
                        <span>Personal Account</span>
                    </div>

                    <button
                        type="button"
                        className="dashboard-user-menu"
                    >
                        ⌄
                    </button>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;