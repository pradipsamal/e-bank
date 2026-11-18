import "./TransactionStats.css";

function TransactionStats({
    totalTransactions,
    totalCredit,
    totalDebit,
}) {
    const formatAmount = (amount) => {
        return amount.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
        });
    };

    return (
        <section className="transaction-stats">
            <article className="transaction-stat-card">
                <span className="stat-label">
                    TOTAL TRANSACTIONS
                </span>

                <strong>
                    {totalTransactions}
                </strong>

                <p>All recorded account activity</p>
            </article>

            <article className="transaction-stat-card credit-stat">
                <span className="stat-label">
                    TOTAL CREDIT
                </span>

                <strong>
                    ₹{formatAmount(totalCredit)}
                </strong>

                <p>Total deposited amount</p>
            </article>

            <article className="transaction-stat-card debit-stat">
                <span className="stat-label">
                    TOTAL DEBIT
                </span>

                <strong>
                    ₹{formatAmount(totalDebit)}
                </strong>

                <p>Total withdrawn amount</p>
            </article>
        </section>
    );
}

export default TransactionStats;