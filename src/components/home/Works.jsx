import Button from "./Button";
import WorksCard from "./WorksCard";

const works = [
  {
    id: 1,
    name: "Z - Aura Perfume Website Design",
    imagePath: "src/assets/images/worksImage-1.webp",
    link: "#",
  },
  {
    id: 2,
    name: "Forhelp Charity Website Design",
    imagePath: "src/assets/images/worksImage-2.webp",
    link: "#",
  },
  {
    id: 3,
    name: "Skill Bridge Website Design",
    imagePath: "src/assets/images/worksImage-3.webp",
    link: "#",
  },
];
const Works = () => {
  return (
    <section className="container bottom-padded our-works">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5">My Works</h2>
        <p className="text-sm mt-2.5 mb-10 text-grey">
          Here's what some of my satisfied clients have to say about my work
        </p>
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
      <Button link="/portfolio" text="View All Projects →" className="flex-center mt-10" />
    </section>
  );
};

export default Works;
