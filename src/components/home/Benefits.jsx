import Card from "./Card";

const benefits = [
  {
    id: 1,
    title: "Customized Designs Aligned with Your Brand",
    description:
      "I create tailored visual and UI/UX solutions that reflect your brand’s identity, values, and goals. Through close collaboration, every design is crafted to feel authentic, consistent, and memorable—helping you stand out and connect with your audience.",
  },
  {
    id: 2,
    title: "Creative Excellence with User-Centered Thinking",
    description:
      "Blending strong visual aesthetics with intuitive user experience, I design interfaces and graphics that are both engaging and functional. From typography and color to layout and interaction, every detail is designed to create impact, build credibility, and deliver a seamless user journey.",
  },
  {
    id: 3,
    title: "User-Centric Approach for Optimal Experience",
    description:
      "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
  },
  {
    id: 4,
    title: "Mobile-Friendly Designs for Broad Accessibility",
    description:
      "In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
  },
  {
    id: 5,
    title: "Expertise in Visual Design",
    description:
      "With strong proficiency in graphic design tools and techniques, I bring creative concepts to life through striking visuals. From seamless layouts to compelling illustrations, I leverage the latest design trends and tools to elevate brand identity and engage audiences with a dynamic, memorable visual experience.",
  },
];

const Benefits = () => {
  return (
    <section className="container bottom-padded benefits">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          Benefits
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          By choosing my design services, you gain thoughtful visuals and
          user-focused experiences that elevate your brand.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-7.5 mb-7.5 max-sm:grid-cols-1 max-sm:gap-5">
        {benefits.slice(0, 2).map((benefit) => (
          <Card
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            align="left"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-7.5 max-sm:grid-cols-1 max-sm:gap-5 max-[1025px]:grid-cols-2">
        {benefits.slice(2).map((benefit, index, arr) => (
          <Card
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            align="left"
            className={
              index === arr.length - 1 ? "max-[1025px]:col-span-full" : ""
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
