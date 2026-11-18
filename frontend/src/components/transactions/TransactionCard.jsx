import "./TransactionCard.css";

function TransactionCard({ transaction }) {
    const isCredit = transaction.type === "Credit";

    const initials = transaction.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const formattedAmount = transaction.amount.toLocaleString(
        "en-IN",
        {
            minimumFractionDigits: 2,
        }
    );

    return (
        <article className="transaction-card">
            <div className="transaction-main">
                <div
                    className={`transaction-type-icon ${isCredit ? "credit-icon" : "debit-icon"
                        }`}
                >
                    {isCredit ? "+" : "−"}
                </div>

                <div className="transaction-id">
                    <span>TRANSACTION ID</span>

                    <strong>{transaction.trasanctionId}</strong>
                </div>
            </div>

            <div className="transaction-account">
                <div className="transaction-avatar">
                    {initials}
                </div>

                <div>
                    <span>ACCOUNT HOLDER</span>

                    <strong>{transaction.name}</strong>

                    <small>{transaction.accountnumber}</small>
                </div>
            </div>

            <div className="transaction-type">
                <span>TYPE</span>

                <strong
                    className={
                        isCredit ? "credit-text" : "debit-text"
                    }
                >
                    {transaction.type}
                </strong>
            </div>

            <div className="transaction-amount">
                <span>AMOUNT</span>

                <strong
                    className={
                        isCredit ? "credit-text" : "debit-text"
                    }
                >
                    {isCredit ? "+" : "−"} ₹{formattedAmount}
                </strong>
            </div>

            <div className="transaction-date">
                <span>DATE & TIME</span>

                <strong>{transaction.date}</strong>

                <small>{transaction.time}</small>
            </div>

            <div className="transaction-status">
                <span className="transaction-status-dot" />
                Completed
            </div>
        </article>
    );
}

export default TransactionCard;