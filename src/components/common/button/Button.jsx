import { useState } from "react";
import "./Button.scss";
import { IoMdArrowDropright } from "react-icons/io";

const Button = ({ children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="custom-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {children}
      <IoMdArrowDropright className={`arrow ${isHovered ? "show" : ""}`} />
    </button>
  );
};

export default Button;
