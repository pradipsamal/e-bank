import "./FormInput.css";

function FormInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = true,
    maxLength
}) {
    return (
        <div className="form-input-group">

            <label htmlFor={name}>
                {label}

                {required && (
                    <span className="required-star">*</span>
                )}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                maxLength={maxLength}
            />

        </div>
    );
}

export default FormInput;