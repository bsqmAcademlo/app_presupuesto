import React from "react";

import "./styles.css";

interface interfaceInput {
    type: string;
    placeholder: string;
    value: string;
    name: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    textError?: string;
}

export const Input = ({
    name,
    onchange,
    placeholder,
    type,
    value,
    error,
    textError,
}: interfaceInput) => {
    return (
        <div className="inputStyle">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                name={name}
                className={error ? "fieldError" : ""}
            />
            <p style={error ? { opacity: 1 } : { opacity: 0 }}>{textError}</p>
        </div>
    );
};
