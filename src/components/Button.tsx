import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
