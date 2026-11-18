import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const adminId = import.meta.env.VITE_ADMIN_ID
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

    const [formData, setFormData] = useState({
        loginId: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { loginId, password } = formData;

        // Temporary admin credentials
        // Replace these with your backend authentication later.
        if (loginId === adminId && password === adminPassword) {
            localStorage.setItem("adminLoggedIn", "true");

            navigate("/layout");
            return;
        }

        setError("Invalid login ID or password.");
    };

    return (
        <div className="admin-login-page">
            <div className="admin-login-container">

                {/* Left Section */}
                <div className="admin-login-brand">
                    <div className="admin-brand-icon">B</div>

                    <span className="admin-brand-label">
                        BANKING ADMINISTRATION
                    </span>

                    <h1>
                        Manage your banking
                        <br />
                        operations securely.
                    </h1>

                    <p>
                        Access your administrative dashboard to manage accounts,
                        transactions, credits, debits and customer information.
                    </p>

                    <div className="admin-security-info">
                        <span className="security-icon">✓</span>

                        <div>
                            <strong>Secure Admin Access</strong>
                            <small>
                                Authorized personnel only
                            </small>
                        </div>
                    </div>
                </div>

                {/* Login Card */}
                <div className="admin-login-section">
                    <div className="admin-login-card">

                        <div className="login-card-header">
                            <div className="login-icon">→</div>

                            <span>ADMIN PORTAL</span>

                            <h2>Welcome Back</h2>

                            <p>
                                Sign in to continue to your dashboard.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>

                            {/* Login ID */}
                            <div className="login-form-group">
                                <label htmlFor="loginId">
                                    LOGIN ID
                                </label>

                                <input
                                    id="loginId"
                                    type="text"
                                    name="loginId"
                                    placeholder="Enter your login ID"
                                    value={formData.loginId}
                                    onChange={handleChange}
                                    autoComplete="username"
                                />
                            </div>

                            {/* Password */}
                            <div className="login-form-group">
                                <label htmlFor="password">
                                    PASSWORD
                                </label>

                                <div className="password-input-wrapper">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle-button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="login-error">
                                    <span>!</span>
                                    {error}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                className="admin-login-button"
                            >
                                <span>Sign In to Dashboard</span>
                                <span className="login-arrow">→</span>
                            </button>

                        </form>

                        <div className="login-footer">
                            <span className="footer-dot"></span>
                            Protected administrative environment
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminLogin;