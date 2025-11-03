import { NavLink } from "react-router-dom";

const WorksCard = ({ name, imagePath, link }) => {
  return (
    <NavLink className="works-card bg-white rounded-xl p-12.5" to={link}>
      <h3 className="text-left font-semibold text-gray leading-normal text-lg mb-7.5">
        {name}
      </h3>
      <img className="rounded-xl" src={imagePath} alt={name} />
    </NavLink>
  );
};

export default WorksCard;
