import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const services = [
    {
        icon: "💸",
        title: "Money Transfer",
        description:
            "Transfer money instantly to any bank account securely.",
    },
    {
        icon: "💳",
        title: "Debit Cards",
        description:
            "Manage your debit cards, limits and transactions easily.",
    },
    {
        icon: "📱",
        title: "Mobile Banking",
        description:
            "Access your account anytime from your smartphone.",
    },
    {
        icon: "📊",
        title: "Financial Insights",
        description:
            "Track spending and understand your financial habits.",
    },
];

function Services() {
    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="services-heading">
                    <div className="services-label">
                        OUR SERVICES
                    </div>

                    <h2>
                        Everything You Need
                        <span>in One Place</span>
                    </h2>

                    <p>
                        Powerful banking services designed to make your
                        financial life easier.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;