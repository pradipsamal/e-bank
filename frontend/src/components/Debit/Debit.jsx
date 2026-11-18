import "./Debit.css";
import WithdrawalForm from "./WithdrawalForm";
import WithdrawalSummary from "./WithdrawalSummary";


function Debit() {
    return (
        <main className="debit-page">
            {/* Page Header */}
            <section className="debit-page-header">
                <div>
                    <span className="debit-page-label">BANKING</span>

                    <h1>Debit / Withdrawal</h1>

                    <p>Withdraw money securely from your EBank account.</p>
                </div>

                <div className="debit-secure-badge">
                    <span>🔐</span>

                    <div>
                        <strong>Secure Banking</strong>
                        <small>Protected transaction</small>
                    </div>
                </div>
            </section>

            {/* Balance Summary */}
            <WithdrawalSummary />

            {/* Withdrawal Content */}
            <section className="debit-main-content">
                <div className="withdrawal-form-card">
                    <div className="withdrawal-card-header">
                        <div>
                            <span>WITHDRAWAL</span>

                            <h2>Withdraw Money</h2>

                            <p>Enter the amount you want to withdraw.</p>
                        </div>

                        <div className="withdrawal-icon">₹</div>
                    </div>

                    <WithdrawalForm />
                </div>

                {/* Right Side Information */}
                <aside className="withdrawal-info">
                    <div className="withdrawal-info-heading">
                        <span>WITHDRAWAL GUIDE</span>

                        <h2>Before You Withdraw</h2>
                    </div>

                    <div className="withdrawal-info-item">
                        <div className="withdrawal-info-icon">💰</div>

                        <div>
                            <h3>Check Balance</h3>

                            <p>
                                Make sure you have sufficient funds available in your account.
                            </p>
                        </div>
                    </div>

                    <div className="withdrawal-info-item">
                        <div className="withdrawal-info-icon">📊</div>

                        <div>
                            <h3>Withdrawal Limit</h3>

                            <p>
                                Your daily withdrawal limit may vary depending on your account.
                            </p>
                        </div>
                    </div>

                    <div className="withdrawal-info-item">
                        <div className="withdrawal-info-icon">🔒</div>

                        <div>
                            <h3>Secure Transaction</h3>

                            <p>
                                Every withdrawal is recorded securely in your transaction
                                history.
                            </p>
                        </div>
                    </div>

                    <div className="withdrawal-help">
                        <span>💡</span>

                        <div>
                            <strong>Important</strong>

                            <p>Please verify the withdrawal amount before submitting.</p>
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

export default Debit;
