import AccountCard from "./AccountCard";

import "./AccountList.css";

function AccountList({accounts,onDelete,}) {
  return (
    <section className="account-list">

      <div className="account-list-header">

        <div>

          <h2>
            Customer Accounts
          </h2>

          <p>
            All registered bank accounts
          </p>

        </div>

        <span className="account-list-count">
          {accounts.length} Accounts
        </span>

      </div>


      <div className="account-list-content">

        {accounts.length > 0 ? (

          accounts.map((account , index) => (

            <AccountCard
              key={index}
              account={account}
              onDelete={onDelete}
            />

          ))

        ) : (

          <div className="account-empty">

            <div className="empty-account-icon">
              #
            </div>

            <h3>
              No accounts found
            </h3>

            <p>
              There are no customer accounts to display.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default AccountList;