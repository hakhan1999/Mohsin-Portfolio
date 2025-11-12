import Button from "./Button";
import WorksCard from "./WorksCard";

const Works = ({
  title = "My Works",
  subtitle = "Here's what some of my satisfied clients have to say about my work",
  works = [],
  showButton = false,
  buttonLink = "/portfolio/",
  buttonText = "View All Projects",
}) => {
  return (
    <section className="container bottom-padded our-works">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          {title}
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-7.5 max-sm:gap-5 max-sm:grid-cols-1 max-[1025px]:grid-cols-2">
        {works.map((item, index, arr) => (
          <WorksCard
            key={item.id}
            name={item.name}
            imagePath={item.imagePath}
            className={index === arr.length - 1 ? "max-[1025px]:hidden" : ""}
          />
        ))}
      </div>

      {showButton && works.length <= 3 && (
        <Button
          link={buttonLink}
          text={buttonText}
          className="flex-center mt-10 w-full"
        />
      )}
    </section>
  );
};

export default Works;
