import React from "react";

interface buttonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fullWidth?: boolean;
  customClassName?: string;
}

const Button: React.FC<buttonProps> = ({
  disable,
  onClick,
  variant,
  loading,
  label,
  type,
  buttonProps,
  ref,
  fullWidth,
  customClassName,
}) => {
  return (
    <button
      type={type || "submit"}
      ref={ref}
      onClick={onClick}
      disabled={disable || loading}
      {...buttonProps}
      className={`rounded-[10px] bg-primary flex items-center justify-center gap-[16px] h-[60px] w-full`}
    >
      <span className="font-Montserrat text-[20px] font-[600] leading-normal text-secondary">
        {label}
        {loading && (
          <>
            <div className="bg-red-400 w-[20px] h-[20px] rounded-full" />
          </>
        )}
      </span>
    </button>
  );
};

export default Button;
