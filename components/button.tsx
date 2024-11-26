"use client";
import "../styles/button.css";

type ButtonType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  style?: "default" | "emphasis";
  ariaLabel?:string
};
export default function Button({
  onClick,
  children,
  style = "default",
  ariaLabel
}: ButtonType) {
  return (
    <button onClick={onClick} className={style} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
