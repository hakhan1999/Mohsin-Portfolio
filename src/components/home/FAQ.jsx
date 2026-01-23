import Accordion from "./Accordion";
import Card from "./Card";

const faqs = [
  {
    id: 1,
    title: "What is your design process for UI/UX projects?",
    description:
      "My design process begins with user research and understanding the project goals. I then create wireframes and prototypes, followed by user testing and iterative design improvements. I prioritize user needs, ensuring the final product is both intuitive and visually appealing.",
  },
  {
    id: 2,
    title: "Do you conduct user research and testing?",
    description:
      "Yes, user research and testing are integral parts of my process. I conduct user interviews, surveys, and usability testing to ensure the design aligns with the target audience’s needs and expectations, leading to a more effective user experience.",
  },
  {
    id: 3,
    title: "How do you ensure mobile responsiveness in your designs?",
    description:
      "I design with mobile-first principles in mind, ensuring that all layouts and elements are fully responsive across all devices. I conduct thorough testing on various screen sizes and browsers to guarantee a seamless experience for every user.",
  },
  {
    id: 4,
    title: "How do you approach accessibility in your designs?",
    description:
      "I follow WCAG (Web Content Accessibility Guidelines) to ensure that my designs are accessible to all users, including those with disabilities. This includes designing for screen readers, keyboard navigation, and using sufficient color contrast for readability.",
  },
  {
    id: 5,
    title: "Can you redesign my existing website or app?",
    description:
      "Absolutely! I specialize in redesigning existing websites and apps to enhance user experience, improve usability, and modernize the interface. I focus on creating a visually appealing and user-friendly design while keeping the core functionality intact.",
  },
  {
    id: 6,
    title: "Do you collaborate with developers during the design process?",
    description:
      "Yes, I work closely with developers to ensure the design is feasible and optimized for implementation. I provide detailed design specifications, assets, and support during the development phase to ensure a seamless transition from design to code.",
  },
];

const FAQ = () => {
  return (
    <section className="container bottom-padded faq">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-sm:text-center max-sm:leading-normal max-[1025px]:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          Here are answers to some common questions
        </p>
      </div>
      <div className="accordion-wrapper flex-start justify-between max-sm:flex-col max-sm:gap-5">
        <div className="w-[67.5%] max-[1025px]:w-[57%] max-sm:w-full p-12.5 rounded-xl bg-white flex flex-col gap-7.5 max-sm:gap-5 max-sm:p-5">
          {faqs.map((item, index) => (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
              defaultOpen={index === 0}
            />
          ))}
        </div>
        <Card
          className="w-[30%] max-[1025px]:w-[40%] max-sm:w-full"
          icon="/images/star.svg"
          title="Still have any Questions ?"
          description="Lets collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!"
          align="left"
          button
        />
      </div>
    </section>
  );
};

export default FAQ;
