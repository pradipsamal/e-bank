import "./BalanceOverview.css";

function BalanceOverview() {
    return (
        <section className="balance-overview">
            <div className="balance-main-card">
                <div className="balance-card-header">
                    <span>Total Balance</span>

                    <button type="button">
                        ⋮
                    </button>
                </div>

                <h2>₹ 2,45,680.50</h2>

                <div className="balance-growth">
                    <span>↗ 12.8%</span>
                    <p>from last month</p>
                </div>

                <div className="balance-account">
                    <span>Primary Account</span>
                    <strong>•••• 7890</strong>
                </div>
            </div>

            <div className="balance-small-card">
                <span>Income</span>

                <strong>₹ 84,500</strong>

                <p>
                    <b>+8.4%</b> this month
                </p>

                <div className="balance-progress">
                    <span></span>
                </div>
            </div>

            <div className="balance-small-card">
                <span>Expenses</span>

                <strong>₹ 36,820</strong>

                <p>
                    <b>-4.2%</b> this month
                </p>

                <div className="balance-progress expense">
                    <span></span>
                </div>
            </div>
        </section>
    );
}

export default BalanceOverview;