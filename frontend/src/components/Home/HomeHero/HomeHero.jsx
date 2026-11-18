import { Link } from "react-router-dom";
import "./HomeHero.css";
import BankCard from "../BankCard/BankCard";
import BalanceCard from "../BalanceCard/BalanceCard";

function HomeHero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Left */}
                <div className="hero-content">
                    <div className="hero-badge">
                        🔒 Secure &amp; Trusted Digital Banking
                    </div>

                    <h1>
                        Banking Made
                        <span>Simple &amp; Secure</span>
                    </h1>

                    <p>
                        Manage your money, transfer funds, pay bills and track your
                        finances — all from one powerful digital banking platform.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/login" className="hero-btn primary">
                            Get Started →
                        </Link>

                        <a href="#services" className="hero-btn secondary">
                            Explore Services
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <strong>1M+</strong>
                            <span>Customers</span>
                        </div>

                        <div className="hero-stat">
                            <strong>99.9%</strong>
                            <span>Secure</span>
                        </div>

                        <div className="hero-stat">
                            <strong>24/7</strong>
                            <span>Support</span>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="hero-visual">
                    <BankCard />
                    <BalanceCard />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;