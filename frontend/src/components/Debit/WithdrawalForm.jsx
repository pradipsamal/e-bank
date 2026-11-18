import { useState } from "react";
import "./WithdrawalForm.css";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

function WithdrawalForm() {
    const [formData, setFormData] = useState({
        accountnumber: "",
        amount: "",
        method: "Cash Withdrawal",
        date: "",
        purpose: "",
        type : 'Debit'
    });

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [customers , setCustomers] = useState([])

    // Demo customer data
    // const customers = [
    //     {
    //         id: 1,
    //         name: "Rahul Sharma",
    //         account: "XXXX4582",
    //         fullAccount: "458245821234",
    //         type: "Savings Account",
    //         balance: 245680.5,
    //         initials: "RS",
    //     },
    //     {
    //         id: 2,
    //         name: "Rohit Kumar",
    //         account: "XXXX7821",
    //         fullAccount: "782145821234",
    //         type: "Current Account",
    //         balance: 182400,
    //         initials: "RK",
    //     },
    //     {
    //         id: 3,
    //         name: "Priya Singh",
    //         account: "XXXX3214",
    //         fullAccount: "321445821234",
    //         type: "Savings Account",
    //         balance: 98500,
    //         initials: "PS",
    //     },
    // ];

    const dailyLimit = 50000;
    const minimumAmount = 100;

    let users = async ()=>{
        let res = await axios.get('http://localhost:3200/allusers')
        console.log(res.data.data)
        setCustomers(res.data.data)
    }

    useEffect(()=>{
        users()
    } , [])


    /* ==========================================
       INPUT CHANGE
    ========================================== */

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    };


    /* ==========================================
       ACCOUNT SEARCH
    ========================================== */

    const handleAccountSearch = () => {
        const searchValue = formData.accountnumber.trim().toLowerCase();
        if (!searchValue) {
            setError("Please enter an account number or customer name.");
            setSelectedCustomer(null);
            return;
        }
        const customer = customers.find(
            (item) =>
                item.accountnumber.toString().includes(searchValue)
        );
        if (!customer) {
            setError("No customer account found.");
            setSelectedCustomer(null);
            return;
        }
        setSelectedCustomer(customer);
        setError("");
        setSuccess("");
        // Keep the visible account field clean
        setFormData((previous) => ({
            ...previous,
            accountnumber: customer.accountnumber,
        }));
    };


    /* ==========================================
       FORM SUBMIT
    ========================================== */

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        if (!selectedCustomer) {
            setError("Please search and select a customer account first.");
            return;
        }
        const amount = Number(formData.amount);
        if (!amount || amount <= 0) {
            setError("Please enter a valid withdrawal amount.");
            return;
        }
        if (amount < minimumAmount) {
            setError(
                `Minimum withdrawal amount is ₹${minimumAmount.toLocaleString(
                    "en-IN"
                )}.`
            );
            return;
        }
        if (amount > selectedCustomer.balance) {
            setError("Insufficient balance in the selected customer account.");
            return;
        }
        if (amount > dailyLimit) {
            setError(
                `Maximum daily withdrawal limit is ₹${dailyLimit.toLocaleString(
                    "en-IN"
                )}.`
            );
            return;
        }
        // Demo success
        setSuccess(
            `Withdrawal of ₹${amount.toLocaleString(
                "en-IN"
            )} recorded successfully for ${selectedCustomer.name}.`
        );
        // console.log("Withdrawal Transaction:", {
        //     customer: selectedCustomer,
        //     ...formData,
        //     amount,
        // });
        // Reset amount and purpose
        setFormData((previous) => ({
            ...previous,
            accountnumber: "",
            amount: "",
            purpose: "",
        }));
        
        let res = await axios.post('http://localhost:3200/creditwithdraw' , formData)
        toast.success(res.data.message)
    };


    return (
        <form
            className="withdrawal-form"
            onSubmit={handleSubmit}
        >

            {/* ==========================================
          CUSTOMER ACCOUNT
      ========================================== */}

            <div className="withdrawal-field">

                <label htmlFor="account">
                    Customer Account
                    <i>*</i>
                </label>

                <div className="account-search-wrapper">

                    <input
                        id="account"
                        name="accountnumber"
                        type="text"
                        value={formData.accountnumber}
                        onChange={handleChange}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                handleAccountSearch();
                            }
                        }}
                        placeholder="Account number"
                        autoComplete="off"
                    />

                    <button
                        type="button"
                        className="account-search-button"
                        onClick={handleAccountSearch}
                        aria-label="Search customer account"
                    >
                        🔍
                    </button>

                </div>

                <small className="field-help">
                    Search by customer name or account number
                </small>

            </div>


            {/* ==========================================
          CUSTOMER SEARCH RESULTS
      ========================================== */}

            {formData.accountnumber && !selectedCustomer && (
                <div className="customer-search-hint">

                    <div className="hint-icon">
                        🔎
                    </div>

                    <div>
                        <strong>Find Customer</strong>

                        <p>
                            Click the search button to find the customer
                            account.
                        </p>
                    </div>

                </div>
            )}


            {/* ==========================================
          SELECTED CUSTOMER
      ========================================== */}

            {selectedCustomer && (
                <div className="selected-customer">

                    <div className="customer-avatar">
                        {
                            selectedCustomer.fullName.split(' ')[0][0] + selectedCustomer.fullName.split(' ')[1][0]
                        }
                    </div>


                    <div className="customer-details">

                        <strong>
                            {selectedCustomer.fullName}
                        </strong>

                        <span>
                            Account: {selectedCustomer.accountnumber}
                        </span>

                        <small>
                            Current Account
                        </small>

                    </div>


                    <div className="customer-balance">

                        <span>
                            Available Balance
                        </span>

                        <strong>
                            ₹
                            {selectedCustomer.balance.toLocaleString(
                                "en-IN",
                                {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }
                            )}
                        </strong>

                    </div>

                </div>
            )}


            {/* ==========================================
          WITHDRAWAL AMOUNT
      ========================================== */}

            <div className="withdrawal-field">

                <label htmlFor="amount">
                    Withdrawal Amount
                    <i>*</i>
                </label>

                <div className="withdrawal-amount">

                    <span>₹</span>

                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        min={minimumAmount}
                        max={dailyLimit}
                        step="0.01"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter withdrawal amount"
                        required
                    />

                </div>


                <div className="amount-limits">

                    <span>
                        Minimum: ₹{minimumAmount.toLocaleString("en-IN")}
                    </span>

                    <span>
                        Maximum: ₹{dailyLimit.toLocaleString("en-IN")}/day
                    </span>

                </div>

            </div>


            {/* ==========================================
          METHOD + DATE
      ========================================== */}

            <div className="withdrawal-grid">

                {/* Method */}

                <div className="withdrawal-field">

                    <label htmlFor="method">
                        Withdrawal Method
                        <i>*</i>
                    </label>

                    <select
                        id="method"
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                        required
                    >

                        <option value="Cash Withdrawal">
                            Cash Withdrawal
                        </option>

                        <option value="ATM">
                            ATM Withdrawal
                        </option>

                        <option value="Branch">
                            Branch Withdrawal
                        </option>

                    </select>

                </div>

            </div>


            {/* ==========================================
          PURPOSE
      ========================================== */}

            <div className="withdrawal-field">

                <label htmlFor="purpose">
                    Purpose / Remarks
                </label>

                <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Enter withdrawal purpose or remarks"
                    rows="3"
                />

            </div>


            {/* ==========================================
          ERROR MESSAGE
      ========================================== */}

            {error && (
                <div className="withdrawal-message withdrawal-error">

                    <div className="message-icon">
                        !
                    </div>

                    <div>
                        <strong>
                            Withdrawal Error
                        </strong>

                        <p>
                            {error}
                        </p>
                    </div>

                </div>
            )}


            {/* ==========================================
          SUCCESS MESSAGE
      ========================================== */}

            {success && (
                <div className="withdrawal-message withdrawal-success">

                    <div className="message-icon">
                        ✓
                    </div>

                    <div>
                        <strong>
                            Withdrawal Successful
                        </strong>

                        <p>
                            {success}
                        </p>
                    </div>

                </div>
            )}


            {/* ==========================================
          SECURITY NOTICE
      ========================================== */}

            <div className="withdrawal-security">

                <div className="withdrawal-security-icon">
                    🔐
                </div>

                <div>

                    <strong>
                        Secure Withdrawal
                    </strong>

                    <p>
                        This transaction will be securely recorded
                        in the customer's account history.
                    </p>

                </div>

            </div>


            {/* ==========================================
          SUBMIT
      ========================================== */}

            <button
                type="submit"
                className="withdrawal-submit"
            >

                <span>
                    Withdraw Money
                </span>

                <strong>
                    →
                </strong>

            </button>


            <p className="withdrawal-submit-note">
                Verify the customer account and withdrawal
                amount before submitting.
            </p>

        </form>
    );
}

export default WithdrawalForm;
