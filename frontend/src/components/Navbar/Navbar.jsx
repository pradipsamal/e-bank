import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'

const navItems = [
    // {
    //     label: "Dashboard",
    //     icon: "📊",
    //     path: "",
    // },
    {
        label: "Accounts",
        icon: "💳",
        path: "",
    },
    {
        label: "Create Account",
        icon: "🏛️",
        path: "createAccount",
    },
    {
        label: "Delete Account",
        icon: "🗑️",
        path: "deleteaccount",
    },
    {
        label: "Debit",
        icon: "💳",
        path: "debit",
    },
    {
        label: "Credit",
        icon: "💰",
        path: "credit",
    },
    {
        label: "Transactions",
        icon: "📋",
        path: "trasaction",
    },
];

function Navbar() {

    const navigate = useNavigate()

    let logout = ()=>{
        navigate('/login' , {replace : true})
    }

    return (
        <header className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <div className="logo-icon">🏛️</div>

                <div className="logo-text">
                    <h2>EBank</h2>
                    <span>Digital Banking</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="navbar-menu">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Right side */}
            <div className="navbar-right">
                {/* Notification */}
                {/* <button className="notification-btn">
                    🔔
                    <span className="notification-dot"></span>
                </button> */}

                {/* User */}
                {/* <div className="profile">
                    <div className="profile-avatar">CH</div>

                    <div className="profile-info">
                        <strong>Chandan</strong>
                        <span>Customer</span>
                    </div>
                </div> */}

                {/* Logout */}
                <button className="logout-btn" onClick={()=>logout()}>🚪 Logout</button>
            </div>
        </header>
    );
}

export default Navbar;