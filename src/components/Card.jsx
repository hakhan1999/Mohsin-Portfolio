const Card = ({ icon, title, description }) => {
  return (
    <div className="card bg-white rounded-xl p-12.5  flex-center flex-col">
      {icon && (
        <div className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover mb-5">
          <img className="w-7" src={icon} alt={title} />
        </div>
      )}
      <h3 className="font-semibold text-grey text-xl mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm mt-2.5 mb-10 text-gray text-center">
        {description}
      </p>
    </div>
  );
};

export default Card;
