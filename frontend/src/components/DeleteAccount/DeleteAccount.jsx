import { useState } from "react";
import "./DeleteAccount.css";
import { useNavigate } from "react-router";
import axios from 'axios'
import { toast } from "react-toastify";


    function DeleteAccount() {
    const [formData, setFormData] = useState({
        accountHolder: "",
        accountnumber: "",
        confirmAccountNumber: "",
        mobile : ''
    });

    const navigate = useNavigate()

    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
        !formData.accountnumber ||
        !formData.accountHolder ||
        !formData.confirmAccountNumber
        ) {
        return;
        }

        if (formData.accountnumber !== formData.confirmAccountNumber) {
        alert("Account numbers do not match.");
        return;
        }

        setShowConfirm(true);
    };

    const handleDelete = async () => {
        console.log("Deleting account:", formData.accountnumber);

        // API delete request will go here

        // alert("Account deleted successfully.");

        let res = await axios.post('http://localhost:3200/deleteaccount' , formData)
        
        toast.success(res.data.message)

        setFormData({
        accountnumber: "",
        accountHolder: "",
        confirmAccountNumber: "",
        });

        setShowConfirm(false);
    };

    return (
        <div className="delete-account-page">
        <div className="delete-account-header">
            <div className="delete-account-icon">×</div>

            <div>
            <span>ACCOUNT MANAGEMENT</span>
            <h1>Delete Account</h1>
            <p>
                Enter the account details below to permanently delete an account.
            </p>
            </div>
        </div>

        <div className="delete-account-card">
            <div className="delete-account-card-header">
            <div>
                <h2>Verify Account Details</h2>
                <p>
                Please enter the account information before proceeding.
                </p>
            </div>

            <div className="danger-badge">DELETE</div>
            </div>

            <form onSubmit={handleSubmit}>
            <div className="delete-form-grid">
                <div className="delete-form-group">
                    <label>ACCOUNT HOLDER NAME</label>

                    <input
                        type="text"
                        name="accountHolder"
                        placeholder="Enter account holder name"
                        value={formData.accountHolder}
                        onChange={handleChange}
                    />

                    <small>
                        Enter the registered account holder name.
                    </small>
                </div>
                <div className="delete-form-group">
                    <label>MOBILE NUMBER</label>

                    <input
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength={10}
                    />

                    <small>
                        Enter the mobile number.
                    </small>
                </div>
                <div className="delete-form-group">
                    <label>ACCOUNT NUMBER</label>

                    <input
                        type="text"
                        name="accountnumber"
                        placeholder="Enter account number"
                        value={formData.accountnumber}
                        onChange={handleChange}
                    />

                    <small>
                        Enter the account number of the account you want to delete.
                    </small>
                </div>

                <div className="delete-form-group delete-confirm-group">
                    <label>CONFIRM ACCOUNT NUMBER</label>

                    <input
                        type="text"
                        name="confirmAccountNumber"
                        placeholder="Re-enter account number"
                        value={formData.confirmAccountNumber}
                        onChange={handleChange}
                    />

                    <small>
                        Re-enter the account number to confirm deletion.
                    </small>
                </div>
            </div>

            <div className="delete-warning">
                <div className="warning-icon">!</div>

                <div>
                <strong>Permanent Action</strong>
                <p>
                    Deleting this account will permanently remove the account
                    information. This action cannot be undone.
                </p>
                </div>
            </div>

            <div className="delete-form-actions">
                <button
                type="button"
                className="delete-cancel-button"
                onClick={() =>
                    setFormData({
                    accountnumber: "",
                    accountHolder: "",
                    confirmAccountNumber: "",
                    })
                }
                >
                Clear
                </button>

                <button type="submit" className="delete-submit-button">
                Verify & Delete
                </button>
            </div>
            </form>
        </div>

        {showConfirm && (
            <div className="delete-confirm-overlay">
            <div className="delete-confirm-modal">
                <div className="modal-danger-icon">!</div>

                <h2>Delete Account?</h2>

                <p>
                Are you sure you want to permanently delete the account
                <strong> {formData.accountnumber}</strong>?
                </p>

                <div className="modal-account-info">
                <span>ACCOUNT HOLDER</span>
                <strong>{formData.accountHolder}</strong>
                </div>

                <div className="modal-actions">
                <button
                    className="modal-cancel-button"
                    onClick={() => setShowConfirm(false)}
                >
                    Cancel
                </button>

                <button
                    className="modal-delete-button"
                    onClick={handleDelete}
                >
                    Yes, Delete Account
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }

    export default DeleteAccount;