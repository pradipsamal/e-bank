import "./TransactionHeader.css";

function TransactionHeader({ totalTransactions }) {
    return (
        <section className="transaction-header">
            <div className="transaction-header-content">
                <div className="transaction-header-icon">
                    ↔
                </div>

                <div>
                    <span className="transaction-header-label">
                        TRANSACTION MANAGEMENT
                    </span>

                    <h1>Transactions</h1>

                    <p>
                        Monitor and manage all account credit and debit activity.
                    </p>
                </div>
            </div>

            <div className="transaction-header-summary">
                <div className="transaction-summary-icon">
                    #
                </div>

                <div>
                    <span>TOTAL TRANSACTIONS</span>

                    <strong>{totalTransactions}</strong>
                </div>
            </div>
        </section>
    );
}

export default TransactionHeader;