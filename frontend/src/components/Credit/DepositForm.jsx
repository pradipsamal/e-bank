import { useState } from "react";

import "./DepositForm.css";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

function DepositForm() {

    const [formData, setFormData] = useState({
        accountnumber: "",
        amount: "",
        method: "Cash Deposit",
        purpose: "",
        type : 'Credit'
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
    //         accountnumber: "XXXX4582",
    //         fullAccount: "458245821234",
    //         type: "Savings Account",
    //         balance: 245680.5,
    //         initials: "RS",
    //     },

    //     {
    //         id: 2,
    //         name: "Rohit Kumar",
    //         accountnumber: "XXXX7821",
    //         fullAccount: "782145821234",
    //         type: "Current Account",
    //         balance: 182400,
    //         initials: "RK",
    //     },

    //     {
    //         id: 3,
    //         name: "Priya Singh",
    //         accountnumber: "XXXX3214",
    //         fullAccount: "321445821234",
    //         type: "Savings Account",
    //         balance: 98500,
    //         initials: "PS",
    //     },
    // ];

    let allUsers = async ()=>{
        try{
            let res = await axios.get('http://localhost:3200/allusers')
            setCustomers(res.data.data)
            console.log(res.data.data)
        }
        catch(err){

        }
    }


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

    useEffect(()=>{
        allUsers()
    } , [])


    /* ==========================================
       SEARCH CUSTOMER
    ========================================== */

    const handleAccountSearch = () => {
        const searchValue =
            formData.accountnumber.trim().toLowerCase();
        if (!searchValue) {
            setError(
                "Please enter an account number or customer name."
            );
            setSelectedCustomer(null);
            return;
        }
        const customer = customers.find((item) => 
            item.fullName.toLowerCase().includes(searchValue) ||
            item.accountnumber.toString().includes(searchValue)
        );


        if (!customer) {

            setError(
                "No customer account found."
            );

            setSelectedCustomer(null);

            return;
        }
        setSelectedCustomer(customer);
        setError("");
        setSuccess("");
        setFormData((previous) => ({
            ...previous,
            accountnumber: customer.accountnumber,
        }));
    };

    


    /* ==========================================
       SUBMIT
    ========================================== */

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        if (!selectedCustomer) {
            setError(
                "Please search and select a customer account first."
            );
            return ;
        }
        const amount = Number(formData.amount);
        if (!amount || amount <= 0) {
            setError(
                "Please enter a valid deposit amount."
            );
            return;
        }
        if (amount < 100) {
            setError(
                "Minimum deposit amount is ₹100."
            );
            return;
        }
        setSuccess(
            `Deposit of ₹${amount.toLocaleString(
                "en-IN"
            )} recorded successfully for ${selectedCustomer.fullName
            }.`
        );
        console.log("Deposit Transaction:", {
            customer: selectedCustomer,
            ...formData,
            amount,
        });

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
            className="deposit-form"
            onSubmit={handleSubmit}
        >

            {/* ==========================================
          CUSTOMER ACCOUNT
      ========================================== */}

            <div className="deposit-field">

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
          SEARCH HINT
      ========================================== */}

            {formData.accountnumber && !selectedCustomer && (

                <div className="customer-search-hint">

                    <div className="hint-icon">
                        🔎
                    </div>

                    <div>

                        <strong>
                            Find Customer
                        </strong>

                        <p>
                            Click the search button to find the
                            customer account.
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
                            current account
                        </small>

                    </div>


                    <div className="customer-balance">

                        <span>
                            Current Balance
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
          DEPOSIT AMOUNT
      ========================================== */}

            <div className="deposit-field">

                <label htmlFor="amount">
                    Deposit Amount
                    <i>*</i>
                </label>


                <div className="deposit-amount">

                    <span>₹</span>

                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        min="100"
                        step="0.01"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter deposit amount"
                        required
                    />

                </div>


                <div className="amount-limits">

                    <span>
                        Minimum: ₹100
                    </span>

                    <span>
                        No maximum limit
                    </span>

                </div>

            </div>


            {/* ==========================================
          METHOD + DATE
      ========================================== */}

            <div className="deposit-grid">

                <div className="deposit-field">

                    <label htmlFor="method">
                        Deposit Method
                        <i>*</i>
                    </label>


                    <select
                        id="method"
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                        required
                    >

                        <option value="Cash Deposit">
                            Cash Deposit
                        </option>

                        <option value="Cheque">
                            Cheque
                        </option>

                        <option value="Bank Transfer">
                            Bank Transfer
                        </option>

                        <option value="Online Transfer">
                            Online Transfer
                        </option>

                    </select>

                </div>

            </div>


            {/* ==========================================
          PURPOSE
      ========================================== */}

            <div className="deposit-field">

                <label htmlFor="purpose">
                    Purpose / Remarks
                </label>


                <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Enter deposit purpose or remarks"
                    rows="3"
                />

            </div>


            {/* ==========================================
          ERROR
      ========================================== */}

            {error && (

                <div className="deposit-message deposit-error">

                    <div className="message-icon">
                        !
                    </div>

                    <div>

                        <strong>
                            Deposit Error
                        </strong>

                        <p>
                            {error}
                        </p>

                    </div>

                </div>

            )}


            {/* ==========================================
          SUCCESS
      ========================================== */}

            {success && (

                <div className="deposit-message deposit-success">

                    <div className="message-icon">
                        ✓
                    </div>

                    <div>

                        <strong>
                            Deposit Successful
                        </strong>

                        <p>
                            {success}
                        </p>

                    </div>

                </div>

            )}


            {/* ==========================================
          SECURITY
      ========================================== */}

            <div className="deposit-security">

                <div className="deposit-security-icon">
                    🔐
                </div>

                <div>

                    <strong>
                        Secure Deposit
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
                className="deposit-submit"
            >

                <span>
                    Deposit Money
                </span>

                <strong>
                    →
                </strong>

            </button>


            <p className="deposit-submit-note">
                Verify the customer account and deposit amount
                before submitting.
            </p>

        </form>
    );
}

export default DepositForm;