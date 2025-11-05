import Button from "./Button";
import WorksCard from "./WorksCard";

const Works = ({
  title = "My Works",
  subtitle = "Here's what some of my satisfied clients have to say about my work",
  works = [],
  showButton = false,
  buttonLink = "/portfolio/",
  buttonText = "View All Projects →",
}) => {
  return (
    <section className="container bottom-padded our-works">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5">{title}</h2>
        <p className="text-lg mt-2.5 mb-10 text-gray">{subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-7.5">
        {works.map((item) => (
          <WorksCard
            key={item.id}
            name={item.name}
            imagePath={item.imagePath}
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
