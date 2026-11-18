import "./AccountSummery.css";

function AccountSummary({
  totalBalance,
  totalAccounts,
  activeAccounts,
}) {
  const summary = [
    {
      icon: "💰",
      title: "Total Balance",
      value: totalBalance,
      type: "balance",
    },
    {
      icon: "🏛️",
      title: "Total Accounts",
      value: totalAccounts,
      type: "accounts",
    },
    {
      icon: "✓",
      title: "Active Accounts",
      value: activeAccounts,
      type: "active",
    },
  ];

  return (
    <section className="account-summary">

      {summary.map((item) => (
        <div
          className="summary-card"
          key={item.title}
        >
          <div
            className={`summary-icon ${item.type}`}
          >
            {item.icon}
          </div>

          <div className="summary-content">
            <span>{item.title}</span>

            <strong>{item.value}</strong>
          </div>
        </div>
      ))}

    </section>
  );
}

export default AccountSummary;