import { NavLink } from "react-router-dom";

const WorksCard = ({ name, imagePath, link, className }) => {
  return (
    <NavLink
      className={`works-card bg-white rounded-xl p-12.5 max-sm:p-7.5 block max-sm:block ${className}`}
      to={link}
      target="_blank"
    >
      <h3 className="text-left font-semibold text-gray leading-normal text-lg mb-7.5 max-sm:mb-5 max-sm:text-lg max-sm:text-center">
        {name}
      </h3>
      <img className="rounded-xl w-full" src={imagePath} alt={name} />
    </NavLink>
  );
};

export default WorksCard;
