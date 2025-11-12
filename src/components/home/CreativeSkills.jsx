import Card from "./Card";

const skills = [
  {
    id: 1,
    iconPath: "/images/web-design.svg",
    title: "Web Design Principles",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
  {
    id: 2,
    iconPath: "/images/ui.svg",
    title: "User Interface - UI Design",
    description:
      "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
  },
  {
    id: 3,
    iconPath: "/images/ux.svg",
    title: "User Experience - UX Design",
    description:
      "Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.",
  },
  {
    id: 4,
    iconPath: "/images/responsive.svg",
    title: "Responsive Web Design",
    description:
      "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
  },
  {
    id: 5,
    iconPath: "/images/wireframing.svg",
    title: "Wireframing and Prototyping",
    description:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
  {
    id: 6,
    iconPath: "/images/mobile-friendly.svg",
    title: "Mobile-Friendly Optimization",
    description:
      "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
  },
];

const CreativeSkills = () => {
  return (
    <section className="container sec-padded creative-skills">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          Creative Skills
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-center max-sm:text-sm">
          As a web designer, I possess a diverse set of skills and expertise to
          bring your web design visions to life
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7.5 max-sm:grid-cols-1 max-sm:gap-5 max-[1025px]:grid-cols-2">
        {skills.map((item) => (
          <Card
            key={item.id}
            icon={item.iconPath}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CreativeSkills;
