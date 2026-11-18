import "./BankCard.css";

function BankCard() {
    return (
        <div className="bank-card">
            <div className="bank-card-top">
                <strong>EBANK</strong>
                <span>▦</span>
            </div>

            <div className="card-number">
                4582&nbsp;&nbsp; 9012&nbsp;&nbsp; 3456&nbsp;&nbsp; 7890
            </div>

            <div className="card-bottom">
                <div>
                    <small>CARD HOLDER</small>
                    <strong>HIMANSHU MALLICK</strong>
                </div>

                <div>
                    <small>VALID THRU</small>
                    <strong>12/29</strong>
                </div>
            </div>
        </div>
    );
}

export default BankCard;
