import Accordion from "./Accordion";
import Card from "./Card";

const faqs = [
  {
    id: 1,
    title: "Can you work with clients remotely?",
    description:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    id: 2,
    title: "How long does it typically take to complete a web design project?",
    description:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    id: 3,
    title: "Do you offer website maintenance services?",
    description:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    id: 4,
    title: "Can you optimize my website for search engines?",
    description:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    id: 5,
    title: "Can you integrate third-party tools or platforms into my website?",
    description:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
];

const FAQ = () => {
  return (
    <section className="container bottom-padded faq">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-sm:text-center max-sm:leading-normal">
          Frequently Asked Questions
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          Here are answers to some common questions
        </p>
      </div>
      <div className="accordion-wrapper flex-start justify-between max-sm:flex-col max-sm:gap-5">
        <div className="w-[67.5%] max-sm:w-full p-12.5 rounded-xl bg-white flex flex-col gap-7.5 max-sm:gap-5 max-sm:p-5">
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
          className="w-[30%] max-sm:w-full"
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
