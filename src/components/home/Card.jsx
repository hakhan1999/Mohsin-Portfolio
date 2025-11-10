import Button from "./Button";

const Card = ({
  icon,
  title,
  description,
  align = "center",
  className,
  button,
}) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div
      className={`card bg-white rounded-xl p-12.5 max-sm:p-8 flex flex-col ${alignment} ${className}`}
    >
      {icon && (
        <div
          className={`${align === "left" ? "flex-left" : "flex-center"} w-full`}
        >
          <div className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover mb-5 w-fit">
            <img className="w-7" src={icon} alt={title} />
          </div>
        </div>
      )}

      <h3
        className={`font-semibold text-gray text-xl  w-full max-sm:text-lg ${
          align === "left"
            ? "text-left mb-0 text-2xl max-sm:pb-5 max-sm:border-b max-sm:border-b-border"
            : "text-center mb-2"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-lg  text-gray leading-normal max-sm:text-sm ${
          align === "left"
            ? "text-left mb-0 mt-5"
            : "text-center mt-2.5 max-sm:mt-1"
        }`}
      >
        {description}
      </p>
      {button && (
        <Button
          text="Contact Me"
          className="flex-left mt-7.5 w-full"
          link="/contact-me/"
        />
      )}
    </div>
  );
};

export default Card;
