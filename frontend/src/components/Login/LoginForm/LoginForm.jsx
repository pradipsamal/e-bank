import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const adminId = import.meta.env.VITE_ADMIN_ID
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login data:", formData);
        // Temporary navigation.
        // Authentication will be connected later.
        if(formData.email == adminId && formData.password == adminPassword){
            navigate("/layout");
        }else{
            alert("worng email id or password.....")
        }
    };

    return (
        <section className="login-form-section">
            <div className="login-form-wrapper">
                <div className="login-form-heading">
                    <h1>Welcome Back</h1>

                    <p>
                        Sign in to access your EBank account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {/* Email */}
                    <div className="login-field">
                        <label htmlFor="email">Email Address</label>

                        <div className="login-input-wrapper">
                            <span>✉</span>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="login-field">
                        <label htmlFor="password">Password</label>

                        <div className="login-input-wrapper">
                            <span>🔒</span>

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword((previous) => !previous)
                                }
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                    </div>

                    {/* Options */}
                    <div className="login-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                            />

                            <span>Remember me</span>
                        </label>

                        <button
                            type="button"
                            className="forgot-password"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="login-submit">
                        Sign In
                    </button>
                </form>

                {/* Demo account */}
                <div className="demo-account">
                    <strong>Demo Account</strong>

                    <p>
                        Email: <span>demo@ebank.com</span>
                    </p>

                    <p>
                        Password: <span>123456</span>
                    </p>
                </div>

                {/* Register */}
                <div className="register-link">
                    <span>Don't have an account?</span>

                    <Link to="/register">
                        Create Account
                    </Link>
                </div>

                <div className="login-security-note">
                    🔒 Your information is encrypted and secure.
                </div>
            </div>
        </section>
    );
}

export default LoginForm;