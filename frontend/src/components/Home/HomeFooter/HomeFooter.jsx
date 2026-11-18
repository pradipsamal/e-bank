import "./HomeFooter.css";

function HomeFooter() {
    return (
        <footer className="home-footer">
            <div className="footer-container">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">
                            🏛️
                        </div>

                        <strong>EBank</strong>
                    </div>

                    <p>
                        Simple, secure and smarter
                        <br />
                        digital banking for everyone.
                    </p>
                </div>

                {/* Company */}
                <div className="footer-column">
                    <h3>Company</h3>

                    <a href="#about">About Us</a>
                    <a href="#careers">Careers</a>
                    <a href="#blog">Blog</a>
                </div>

                {/* Services */}
                <div className="footer-column">
                    <h3>Services</h3>

                    <a href="#transfer">Money Transfer</a>
                    <a href="#debit">Debit Cards</a>
                    <a href="#loans">Loans</a>
                </div>

                {/* Support */}
                <div className="footer-column">
                    <h3>Support</h3>

                    <a href="#help">Help Center</a>
                    <a href="#security">Security</a>
                    <a href="#privacy">Privacy</a>
                </div>
            </div>
        </footer>
    );
}

export default HomeFooter;