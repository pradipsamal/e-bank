import QuickActionCard from "../QuickActionCard/QuickActionCard";
import "./QuickActions.css";


const actions = [
    {
        icon: "↗",
        title: "Send Money",
        description: "Transfer money instantly",
        path: "/transfer",
    },
    {
        icon: "+",
        title: "Add Money",
        description: "Add funds to your account",
        path: "/add-money",
    },
    {
        icon: "▣",
        title: "Pay Bills",
        description: "Pay your bills easily",
        path: "/bills",
    },
    {
        icon: "▤",
        title: "My Cards",
        description: "Manage your debit cards",
        path: "/cards",
    },
];

function QuickActions() {
    return (
        <section className="quick-actions">
            <div className="section-heading">
                <div>
                    <span>QUICK ACCESS</span>
                    <h2>What would you like to do?</h2>
                </div>
            </div>

            <div className="quick-actions-grid">
                {actions.map((action) => (
                    <QuickActionCard
                        key={action.title}
                        icon={action.icon}
                        title={action.title}
                        description={action.description}
                        path={action.path}
                    />
                ))}
            </div>
        </section>
    );
}

export default QuickActions;