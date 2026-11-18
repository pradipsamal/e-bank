import "./BalanceCard.css";

function BalanceCard() {
    return (
        <div className="balance-card">
            <span>Available Balance</span>

            <strong>₹ 2,45,680.50</strong>

            <small>+12.8% this month</small>
        </div>
    );
}

export default BalanceCard;