import LoginBranding from "../components/Login/LoginBranding/LoginBranding";
import LoginForm from "../components/Login/LoginForm/LoginForm";
import "./Login.css";

function Login() {
    return (
        <main className="login-page">
            <LoginBranding />
            <LoginForm />
        </main>
    );
}

export default Login;