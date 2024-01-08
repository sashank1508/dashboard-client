import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type ButtonProps = {
  onClick: () => void;
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  disabled?: boolean;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
