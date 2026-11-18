import TransactionCard from "./TransactionCard";
import "./TransactionList.css";

function TransactionList({ transactions }) {

    return (
        <section className="transaction-list">
            <div className="transaction-list-header">
                <div>
                    <h2>Transaction History</h2>

                    <p>
                        View all credit and debit activity.
                    </p>
                </div>

                <span>
                    {transactions.length} Records
                </span>
            </div>

            <div className="transaction-list-content">
                {transactions.length > 0 ? (
                    transactions.map((transaction , index) => (
                        <TransactionCard
                            key={index}
                            transaction={transaction}
                        />
                    ))
                ) : (
                    <div className="transaction-empty">
                        <div>↔</div>

                        <h3>No transactions found</h3>

                        <p>
                            Try changing your search or filter.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default TransactionList;