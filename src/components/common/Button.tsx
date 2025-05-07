import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-semibold";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white"
      : "bg-gray-200 text-gray-800";
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    />
  );
};