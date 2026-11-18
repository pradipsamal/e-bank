import "./Credit.css";
import DepositForm from "./DepositForm";
import DepositSummary from "./DepositSummary";

function Credit() {
    return (
        <main className="credit-page">

            {/* ==========================================
          PAGE HEADER
      ========================================== */}

            <section className="credit-page-header">

                <div>
                    <span className="credit-page-label">
                        BANKING
                    </span>

                    <h1>Credit / Deposit</h1>

                    <p>
                        Deposit money securely into a customer's account.
                    </p>
                </div>


                <div className="credit-secure-badge">

                    <span>🔐</span>

                    <div>
                        <strong>Secure Banking</strong>
                        <small>Protected transaction</small>
                    </div>

                </div>

            </section>


            {/* ==========================================
          SUMMARY
      ========================================== */}

            <DepositSummary />


            {/* ==========================================
          MAIN CONTENT
      ========================================== */}

            <section className="credit-main-content">

                {/* Deposit Form */}

                <div className="deposit-form-card">

                    <div className="deposit-card-header">

                        <div>

                            <span>DEPOSIT</span>

                            <h2>Deposit Money</h2>

                            <p>
                                Add funds to a customer's bank account.
                            </p>

                        </div>


                        <div className="deposit-icon">
                            ₹
                        </div>

                    </div>


                    <DepositForm />

                </div>


                {/* Information */}

                <aside className="deposit-info">

                    <div className="deposit-info-heading">

                        <span>DEPOSIT GUIDE</span>

                        <h2>Before You Deposit</h2>

                    </div>


                    <div className="deposit-info-item">

                        <div className="deposit-info-icon">
                            👤
                        </div>

                        <div>

                            <h3>Verify Customer</h3>

                            <p>
                                Confirm the customer's account before
                                adding money.
                            </p>

                        </div>

                    </div>


                    <div className="deposit-info-item">

                        <div className="deposit-info-icon">
                            💰
                        </div>

                        <div>

                            <h3>Enter Amount</h3>

                            <p>
                                Verify the deposit amount carefully
                                before submitting.
                            </p>

                        </div>

                    </div>


                    <div className="deposit-info-item">

                        <div className="deposit-info-icon">
                            🧾
                        </div>

                        <div>

                            <h3>Transaction Record</h3>

                            <p>
                                Every deposit is recorded in the
                                customer's transaction history.
                            </p>

                        </div>

                    </div>


                    <div className="deposit-help">

                        <span>💡</span>

                        <div>

                            <strong>Important</strong>

                            <p>
                                Make sure the customer account and
                                deposit amount are correct.
                            </p>

                        </div>

                    </div>

                </aside>

            </section>

        </main>
    );
}

export default Credit;