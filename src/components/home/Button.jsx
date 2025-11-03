import { NavLink } from "react-router-dom";

const Button = ({ link, text, className = "" }) => {
  return (
    <button className={`w-full ${className}`}>
      <NavLink
        className="flex gap-[0.578rem] w-fit bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5"
        to={link}
      >
        {text}
      </NavLink>
    </button>
  );
};

export default Button;
