import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";
const contactDetails = [
  {
    id: 1,
    mainText: "jefferycannon@gmail.com",
    subText: "You can email me here",
    link: "mailto:jefferycannon@gmail.com",
  },
  {
    id: 2,
    mainText: "+91 91813 23 2309",
    subText: "Give me a call on",
    link: "tel:+91 91813 23 2309",
  },
  {
    id: 3,
    mainText: "Somewhere in the World",
    subText: "Location",
    link: "/location",
  },
];

const socialLinks = [
  {
    id: 1,
    link: "#",
    imgLink: "/images/linkedIn.svg",
  },
  {
    id: 2,
    link: "#",
    imgLink: "/images/twitter.svg",
  },
  {
    id: 3,
    link: "#",
    imgLink: "/images/dribble.svg",
  },
];
const ContactDetails = () => {
  return (
    <section className="container bottom-padded contact-details flex-start justify-between max-sm:flex-col-reverse max-sm:gap-10">
      <div className="col-1 w-[40%] max-sm:w-full">
        <div className="details-wrapper flex flex-col gap-5 max-sm:gap-3.5 w-full">
          {contactDetails.map((item) => (
            <div
              key={item.id}
              className="px-7.5 py-6 w-full flex justify-between bg-white rounded-lg"
            >
              <div className="flex flex-col gap-1 justify-start">
                <p className="text-lg w-full text-grey leading-normal max-sm:text-sm">
                  {item.subText}
                </p>
                <NavLink
                  className="text-gray text-xl leading-normal font-medium max-sm:text-[1rem]"
                  to={item.link}
                  target={item.id === 3 ? "_blank" : undefined}
                >
                  {item.mainText}
                </NavLink>
              </div>
              <NavLink
                to={item.link}
                target={item.id === 3 ? "_blank" : undefined}
              >
                <div className="group border border-border bg-[#F5F3F0] rounded-lg p-[1.094rem] transition hover:bg-primary hover:border-primary">
                  <img
                    className="w-4 transition"
                    src="/images/arrow.svg"
                    alt="Arrow"
                    style={{
                      transition: "filter 0.3s ease",
                    }}
                  />
                  <style>{`
                    .group:hover img {
                      filter: brightness(0) saturate(100%) invert(100%)
                        sepia(4%) saturate(0%) hue-rotate(284deg)
                        brightness(106%) contrast(103%);
                    }
                  `}</style>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="social mt-12.5 max-sm:text-center max-sm:text-[1rem]">
          <p className="text-gray text-xl leading-normal font-medium mb-4">
            My Social Profiles
          </p>
          <div className="flex max-sm:justify-center">
            <div className=" flex gap-5 p-5 rounded-lg bg-white w-fit">
              {socialLinks.map((item) => (
                <NavLink
                  className="p-3 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover"
                  to={item.path}
                  key={item.id}
                >
                  <img
                    className="w-6 max-sm:w-5"
                    src={item.imgLink}
                    alt="Social Icon"
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 w-[56%] max-sm:w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactDetails;
