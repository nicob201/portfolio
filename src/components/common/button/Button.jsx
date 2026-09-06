import "./button.scss";
import { IoMdArrowDropright } from "react-icons/io";

const Button = ({ children, ...rest }) => {
  return (
    <button className="custom-button" {...rest}>
      {children}
      <IoMdArrowDropright className="arrow" />
    </button>
  );
};

export default Button;
