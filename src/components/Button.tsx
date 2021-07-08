import React from "react";

type ButtonPropsType = {
  title: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button = ({ title, disabled, type, onClick }: ButtonPropsType) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
