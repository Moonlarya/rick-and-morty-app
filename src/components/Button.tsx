import React from "react";
import styled from "styled-components";

type ButtonPropsType = {
  title: string;
  disabled?: boolean;
  variant?: "outline" | "primary";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Button = ({
  title,
  disabled,
  type,
  variant,
  onClick,
}: ButtonPropsType) => {
  return (
    <>
      {variant === "outline" ? (
        <OutlinedButtonComponent
          type={type}
          onClick={onClick}
          disabled={disabled}
          variant={variant ?? "primary"}
        >
          {title}
        </OutlinedButtonComponent>
      ) : (
        <PrimaryButtonComponent
          type={type}
          onClick={onClick}
          disabled={disabled}
          variant={variant ?? "primary"}
        >
          {title}
        </PrimaryButtonComponent>
      )}
    </>
  );
};

const MainButton = styled.button<{
  variant: "outline" | "primary";
}>`
  margin: 0 10px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
`;

const PrimaryButtonComponent = styled(MainButton)`
  background-image: linear-gradient(
    to right,
    #56ab2f 0%,
    rgb(168, 224, 99) 51%,
    #56ab2f 100%
  );

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: none;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

const OutlinedButtonComponent = styled(MainButton)`
  color: #56ab2f;
  background-color: #00000000;
  padding: 10px 0;
  margin: 10px 0;
`;

export default Button;
