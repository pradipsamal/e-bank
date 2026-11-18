import AccountForm from "./AccountForm";
import "./CreateAccount.css";


function CreateAccount() {
    return (
        <main className="create-account-page">

            <div className="create-account-container">

                {/* Page Header */}
                <div className="create-account-header">
                    <span className="create-account-label">
                        EBANK REGISTRATION
                    </span>

                    <h1>Create Account</h1>

                    <p>
                        Enter your personal details to open your EBank account.
                    </p>
                </div>

                {/* Form */}
                <AccountForm />

            </div>

        </main>
    );
}

export default CreateAccount;