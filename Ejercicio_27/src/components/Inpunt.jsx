import React from "react";

const errorStyle = {
    color: "red",
    fontSize: "0.8em",
    marginTop: "4px",
};

const Input = ({ label, type, name, value, onChange, error }) => {

    return(
        <div>

            <label htmlFor={name}>{label}:</label>

            <br />

            <input type={type} 
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            />
            {error && <div style={errorStyle}>{error}</div>}
            <br />

        </div>

    );


};

export default Input;
