import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "react-phone-number-input/style.css";
import "react-phone-number-input/style.css";
import "react-phone-number-input/style.css";

interface InputProps {
  id: string;
  label?: string;
  type: string;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  isError,
  inputProps,
  inputClassName,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-Montserrat text-secondary text-[15px] lg:text-[20px] font-[500] leading-normal mb-[10px] block"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${inputClassName} rounded-[10px] border  w-full h-[60px] block px-5 text-[20px] ${
          isError
            ? "border-red-400 outline-red-400"
            : "border-primary outline-primary"
        }`}
        {...inputProps}
      />
    </div>
  );
};

export default Input;

export const CheckBox: React.FC<InputProps> = ({
  id,
  label,
  type = "checkbox",
  isError,
  inputProps,
}) => {
  return (
    <div>
      <input type={type} id={id} {...inputProps} />
      <label
        htmlFor={id}
        className="font-Montserrat text-[15px] lg:text-[20px] font-[400] leading-normal text-lightSecondary ml-[16px]"
      >
        {label}
      </label>
    </div>
  );
};

type E164Number = string;

export function StyledPhoneInput({
  label,
  inputClassName,
  id,
  isError,
  inputProps,
  onChange,
}: {
  label: string;
  id: string;
  inputClassName?: string;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (value?: string | undefined) => void; // Adjusted to accept string type
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <PhoneInput
        placeholder="Enter phone number"
        style={{
          borderRadius: "10px",
          width: "100%",
          height: "60px",
          padding: "0 5px",
          fontSize: "20px",
          ...(isError
            ? { border: "1px solid #EF4444", outline: "1px solid #EF4444" }
            : { border: "1px solid #50FE8B", outline: "1px solid #50FE8B" }),
        }}
        onChange={(value: string | undefined) => onChange(value)} // Pass value directly
        inputProps={{
          id: id,
          ...inputProps,
        }}
      />
    </div>
  );
}
