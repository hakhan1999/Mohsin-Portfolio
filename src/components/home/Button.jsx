import { NavLink } from "react-router-dom";

const Button = ({ link, text, className = "" }) => {
  return (
    <button className={`${className}`}>
      <NavLink
        className="flex gap-[0.578rem] w-fit bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5 text-lg font-medium max-sm:text-sm"
        to={link}
      >
        {text}
      </NavLink>
    </button>
  );
};

export default Button;
