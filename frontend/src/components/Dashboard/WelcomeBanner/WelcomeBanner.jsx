import "./WelcomeBanner.css";

function WelcomeBanner() {
    return (
        <section className="welcome-banner">
            <div className="welcome-content">
                <span className="welcome-label">
                    PERSONAL DASHBOARD
                </span>

                <h1>
                    Good morning, Chandan 👋
                </h1>

                <p>
                    Here's what's happening with your money today.
                </p>
            </div>

            <div className="welcome-date">
                <span>Today</span>
                <strong>19 Aug 2026</strong>
            </div>
        </section>
    );
}

export default WelcomeBanner;