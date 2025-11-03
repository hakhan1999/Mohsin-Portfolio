const Card = ({ icon, title, description, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      className={`card bg-white rounded-xl p-12.5 flex flex-col ${alignment}`}
    >
      {icon && (
        <div className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover mb-5">
          <img className="w-7" src={icon} alt={title} />
        </div>
      )}

      <h3
        className={`font-semibold text-grey text-xl  w-full ${
          align === "left" ? "text-left mb-0" : "text-center mb-2"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm  text-gray leading-normal ${
          align === "left" ? "text-left mb-0 mt-5" : "text-center mb-10 mt-2.5 "
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
