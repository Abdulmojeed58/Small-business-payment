import React from "react";

interface InputProps {
  id: string;
  label: string;
  type: string;
  isError?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  isError,
  inputProps,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-Montserrat text-secondary text-[20px] font-[500] leading-normal mb-[10px] block"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`rounded-[10px] border  w-full h-[60px] block ${
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
        className="font-Montserrat text-[20px] font-[400] leading-normal text-lightSecondary ml-[16px]"
      >
        {label}
      </label>
    </div>
  );
};
