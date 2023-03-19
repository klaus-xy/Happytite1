import { NavLink } from "react-router-dom";

const Button = ({ buttonName, className, navLink }) => {
  return (
    <NavLink to={navLink}>
      <button className={className}>{buttonName}</button>
    </NavLink>
  );
};

export default Button;
