import Loader from "./Loader";
import React from "react";
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
const Button: React.FC<IProps> = ({
  onClick = () => {},
  type = "button",
  title,
  isLoading = false,
  className,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isLoading}
        type={type}
        className={`${
          isLoading
            ? "bg-disabled text-disabled flex items-center justify-center cursor-not-allowed"
            : "bg-[#09BDDD] text-white font-bold cursor-pointer"
        } font-bold py-3 px-4 w-full  ${className}`}
      >
        {isLoading && <Loader />}
        {title}
      </button>
    </div>
  );
};

export default Button;