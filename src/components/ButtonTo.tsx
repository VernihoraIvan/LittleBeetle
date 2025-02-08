import { ButtonToProps } from "@/utilities/interfaces";
import { Link } from "react-router-dom";

const ButtonTo = ({ to, title, style, onClick }: ButtonToProps) => {
  return (
    <Link
      onClick={onClick}
      to={to || ""}
      className={`${style} big-responsive-text`}
    >
      {title}
    </Link>
  );
};
export default ButtonTo;
