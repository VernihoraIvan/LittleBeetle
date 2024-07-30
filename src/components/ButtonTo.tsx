import { ButtonToProps } from "@/utilities/interfaces";
import { Link } from "react-router-dom";

const ButtonTo = ({ to, title, style }: ButtonToProps) => {
  return (
    <Link to={to} className={style}>
      {title}
    </Link>
  );
};
export default ButtonTo;
