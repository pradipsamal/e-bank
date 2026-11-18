import "./AccountBenefit.css";

const benefits = [
  {
    icon: "🔐",
    title: "Secure Banking",
    description:
      "Your accounts and transactions are protected with advanced security.",
  },
  {
    icon: "⚡",
    title: "Instant Transfers",
    description:
      "Transfer money quickly between your accounts or to other banks.",
  },
  {
    icon: "📊",
    title: "Track Spending",
    description:
      "Monitor your transactions and understand your spending habits.",
  },
  {
    icon: "📱",
    title: "24/7 Access",
    description:
      "Access your accounts anytime from anywhere using EBank.",
  },
];

function AccountBenefits() {
  return (
    <section className="account-benefits">

      <div className="benefits-heading">
        <span>EBANK BENEFITS</span>

        <h2>Manage Your Money Better</h2>
      </div>


      <div className="benefits-grid">

        {benefits.map((benefit) => (
          <div
            className="benefit-card"
            key={benefit.title}
          >
            <div className="benefit-icon">
              {benefit.icon}
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default AccountBenefits;