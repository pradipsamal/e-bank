import { Link } from "react-router-dom";
import "./LoginBranding.css";

function LoginBranding() {
    return (
        <section className="login-branding">
            <Link to="/" className="login-brand-logo">
                <div className="login-brand-icon">🏛️</div>

                <div>
                    <h2>EBank</h2>
                    <span>Digital Banking</span>
                </div>
            </Link>

            <div className="login-brand-content">
                <div className="login-security-icon">🔐</div>

                <h1>
                    Your Money.
                    <span>Your Future.</span>
                </h1>

                <p>
                    Experience secure, simple and smarter digital banking
                    designed around you.
                </p>

                <div className="login-features">
                    <div>
                        <span>✓</span>
                        <p>Bank-grade security</p>
                    </div>

                    <div>
                        <span>✓</span>
                        <p>Available 24/7</p>
                    </div>

                    <div>
                        <span>✓</span>
                        <p>Fast &amp; secure transactions</p>
                    </div>
                </div>
            </div>

            <div className="login-brand-footer">
                <span>Trusted by millions</span>
                <span>•</span>
                <span>Secure Banking</span>
                <span>•</span>
                <span>24/7 Support</span>
            </div>
        </section>
    );
}

export default LoginBranding;