import Card from "./Card";

const skills = [
  {
    id: 1,
    iconPath: "/images/ui.svg",
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging, and user-focused digital experiences that feel seamless and effective.",
  },
  {
    id: 2,
    iconPath: "/images/ux.svg",
    title: "Graphic Design",
    description:
      "Designing visually compelling assets that communicate clearly and strengthen brand presence.",
  },
  {
    id: 3,
    iconPath: "/images/responsive.svg",
    title: "Illustration",
    description:
      "Producing custom illustrations that add personality, clarity, and storytelling to designs.",
  },
  {
    id: 4,
    iconPath: "/images/wireframing.svg",
    title: "Branding & Identity",
    description:
      "Building strong, memorable brand identities that communicate purpose and connect emotionally.",
  },
  {
    id: 5,
    iconPath: "/images/mobile-friendly.svg",
    title: "Animation",
    description:
      "Bringing ideas to life with refined 2D/3D visuals and expressive motion design.",
  },

  {
    id: 6,
    iconPath: "/images/web-design.svg",
    title: "Wire framing and Prototyping",
    description:
      "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
  },
];

const CreativeSkills = () => {
  return (
    <section className="container sec-padded creative-skills">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          Core Expertise
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-center max-sm:text-sm">
          Designing purposeful digital experiences through strategy, creativity,
          and precision.
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
