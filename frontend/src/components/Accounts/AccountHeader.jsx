import "./AccountHeader.css";

function AccountHeader({ totalAccounts }) {
  return (
    <section className="account-header">

      <div className="account-header-content">

        <div className="account-header-icon">
          <span>▣</span>
        </div>

        <div>

          <span className="account-header-label">
            ACCOUNT MANAGEMENT
          </span>

          <h1>
            All Accounts
          </h1>

          <p>
            Manage customer accounts, balances and account information.
          </p>

        </div>

      </div>


      <div className="account-header-summary">

        <div className="summary-icon">
          #
        </div>

        <div>

          <span>
            TOTAL ACCOUNTS
          </span>

          <strong>
            {totalAccounts}
          </strong>

        </div>

      </div>

    </section>
  );
}

export default AccountHeader;