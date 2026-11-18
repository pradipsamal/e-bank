import { useState } from "react";
import "./AccountForm.css";
import FormInput from "./FormInput";
import axios from 'axios'
import { toast } from "react-toastify";


function AccountForm() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password : "" ,
        mobile: "",
        gender: "",
        fatherName: "",
        aadhaar: "",
        pan: "",
        address: "",
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            let res = await axios.post('http://localhost:3200/addusers' , formData)
            setFormData({
                fullName: "",
                email: "",
                passowrd : "",
                mobile: "",
                gender: "",
                fatherName: "",
                aadhaar: "",
                pan: "",
                address: "",
            })
            toast.success(res.data.message)
        }
        catch(err){
            console.log(err)
        }
    };


    return (
        <form className="account-form" onSubmit={handleSubmit}>

            {/* =================================PERSONAL DETAILS================================= */}

            <div className="form-section">
                <div className="form-section-heading">
                    <span className="form-section-number">
                        01
                    </span>
                    <div>
                        <h2>Personal Details</h2>
                        <p>
                            Enter your basic personal information.
                        </p>
                    </div>
                </div>

                <div className="form-grid">
                    <FormInput
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Create a Password"
                        name="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Mobile Number"
                        name="mobile"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        maxLength = {10}
                        onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    handleChange({
                                        target: {
                                            name: "mobile",
                                            value: value.slice(0, 10)
                                        }
                                    });
                                }}
                    />
                    <div className="form-input-group">
                        <label>
                            Gender
                            <span className="required-star">*</span>
                        </label>

                        <div className="gender-options">

                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />

                                <span>Male</span>
                            </label>


                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />

                                <span>Female</span>
                            </label>


                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handleChange}
                                />

                                <span>Other</span>
                            </label>

                        </div>
                    </div>

                </div>

            </div>


            {/* =================================
          KYC DETAILS
      ================================= */}

            <div className="form-section">

                <div className="form-section-heading">
                    <span className="form-section-number">
                        02
                    </span>

                    <div>
                        <h2>KYC Details</h2>

                        <p>
                            Provide your identity information for verification.
                        </p>
                    </div>
                </div>


                <div className="form-grid">

                    <FormInput
                        label="Father's Name"
                        name="fatherName"
                        placeholder="Enter father's name"
                        value={formData.fatherName}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Aadhaar Number"
                        name="aadhaar"
                        type="text"
                        placeholder="Enter 12 digit Aadhaar number"
                        value={formData.aadhaar}
                        onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");
                                    handleChange({
                                        target: {
                                            name: "aadhaar",
                                            value: value.slice(0, 12)
                                        }
                                    });
                                }}
                        maxLength = {12}
                    />

                    <FormInput
                        label="PAN Card"
                        name="pan"
                        placeholder="Enter PAN number"
                        value={formData.pan}
                        onChange={handleChange}
                        maxLength={10}
                    />

                </div>

            </div>


            {/* =================================
          ADDRESS
      ================================= */}

            <div className="form-section">

                <div className="form-section-heading">
                    <span className="form-section-number">
                        03
                    </span>

                    <div>
                        <h2>Address</h2>

                        <p>
                            Enter your current residential address.
                        </p>
                    </div>
                </div>


                <div className="form-input-group">

                    <label htmlFor="address">
                        Residential Address
                        <span className="required-star">*</span>
                    </label>

                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                        required
                    />

                </div>

            </div>


            {/* =================================
          SECURITY NOTE
      ================================= */}

            <div className="form-security-note">

                <span className="security-icon">
                    🔐
                </span>

                <div>
                    <strong>Your information is secure</strong>

                    <p>
                        Your personal information is protected
                        using secure banking standards.
                    </p>
                </div>

            </div>


            {/* =================================
          SUBMIT
      ================================= */}

            <button
                type="submit"
                className="create-account-submit"
            >
                Create Account
                <span>→</span>
            </button>

        </form>
    );
}

export default AccountForm;