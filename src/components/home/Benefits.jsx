import Card from "./Card";

const benefits = [
  {
    id: 1,
    title: "Customized Designs Tailored to Your Brand",
    description:
      "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
  },
  {
    id: 2,
    title: "Creative Excellence that Captivates Visitors",
    description:
      "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism.",
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
    title: "Expertise in Cutting-Edge Technologies",
    description:
      "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
  },
];

const Benefits = () => {
  return (
    <section className="container bottom-padded benefits">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem]">
          Benefits
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          By choosing my web design service, you'll enjoy the following benefits
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
      <div className="grid grid-cols-3 gap-7.5 max-sm:grid-cols-1 max-sm:gap-5">
        {benefits.slice(2).map((benefit) => (
          <Card
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            align="left"
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
