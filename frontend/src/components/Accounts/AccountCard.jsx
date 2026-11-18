import { useNavigate } from "react-router";
import "./AccountCard.css";
import DeleteAccount from "../DeleteAccount/DeleteAccount";

function AccountCard({account,onDelete,}) {

  const initials = account.fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

    const navigate = useNavigate()


  const formattedBalance =
    account.balance.toLocaleString(
      "en-IN",
      {
        minimumFractionDigits: 2,
      }
    );


  return (
    <article className="account-card">

      {/* ======================================
          ACCOUNT INFORMATION
      ====================================== */}

      <div className="account-card-main">

        <div className="account-card-icon">
          $
        </div>


        <div className="account-number">

          <span>
            ACCOUNT NUMBER
          </span>

          <strong>
            {account.accountnumber}
          </strong>

        </div>

      </div>


      {/* ======================================
          HOLDER
      ====================================== */}

      <div className="account-card-holder">

        <div className="holder-avatar">
          {initials}
        </div>

        <div className="holder-details">

          <span>
            ACCOUNT HOLDER
          </span>

          <strong>
            {account.fullName}
          </strong>

        </div>

      </div>


      {/* ======================================
          ACCOUNT TYPE
      ====================================== */}

      <div className="account-card-type">
        <span>
          ACCOUNT TYPE
        </span>
        <strong>
          Current Account
        </strong>

      </div>


      {/* ======================================
          BALANCE
      ====================================== */}

      <div className="account-card-balance">

        <span>
          AVAILABLE BALANCE
        </span>

        <strong>
          ₹{formattedBalance}
        </strong>

      </div>


      {/* ======================================
          STATUS
      ====================================== */}

      <div className="account-card-status">
        <span className="status-dot" />
        Active
      </div>


      {/* ======================================
          DELETE
      ====================================== */}

      <button
        type="button"
        className="account-delete-button"
        onClick={()=>{
          navigate('/layout/deleteaccount')
        }}
      >

        <span className="delete-icon">
          🗑
        </span>

        <span>
          Delete
        </span>

      </button>

    </article>
  );
}

export default AccountCard;