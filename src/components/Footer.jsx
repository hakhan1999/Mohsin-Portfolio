import { NavLink } from "react-router-dom";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Me",
    path: "/about-me/",
  },
  {
    id: 3,
    name: "Portfolio",
    path: "/portfolio/",
  },
  {
    id: 4,
    name: "Contact Me",
    path: "/contact-me/",
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

const contactLinks = [
  {
    id: 1,
    text: "mohsinbest57@gmail.com",
    iconPath: "/images/email.svg",
    link: "mailto:mohsinbest57@gmail.com",
  },
  {
    id: 2,
    text: "+92 347 2436 445",
    iconPath: "/images/phone-blue.svg",
    link: "tel:+92 347 2436 445",
  },
  {
    id: 3,
    text: "Karachi, Pakistan",
    iconPath: "/images/location.svg",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer container border-t border-t-border">
      <div className="top flex justify-between pt-10 max-sm:pt-7.5 pb-5 max-sm:flex-col">
        <NavLink
          className="text-primary text-2xl font-semibold max-sm:text-lg max-sm:mb-5 max-sm:order-1"
          to="/"
        >
          Mohsin Alam.
        </NavLink>
        <ul className="flex gap-7.5 max-sm:gap-5 max-sm:order-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                className="text-lg max-sm:text-sm text-gray transition font-medium hover:font-semibold "
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="social flex gap-3.5 max-sm:order-2 max-sm:mb-7.5">
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
      <div className="middle flex justify-center max-sm:hidden!">
        <div className="contactLinksWrapper flex justify-center gap-12 max-sm:gap-5 py-5.5 px-7 border border-border rounded-lg max-sm:flex-col">
          {contactLinks.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={`flex gap-[0.478rem] relative text-lg max-sm:text-sm ${
                index !== 0
                  ? "before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-4 before:bg-border max-sm:before:hidden"
                  : ""
              }`}
            >
              <img src={item.iconPath} alt="Social Icon" />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bottom flex justify-between py-8 max-sm:flex-col max-sm:gap-1 max-sm:pt-2 max-[1025px]:flex-col max-[1025px]:gap-1">
        <p className="text-gray text-lg max-sm:text-center max-sm:text-sm">
          Copyright © 2025 Mohsin Alam. All rights reserved.
        </p>
        <p className="text-gray text-lg max-sm:text-center max-sm:text-sm">
          Designed with <span className="text-red-600">❤</span> by Me and
          Developed By{" "}
          <NavLink
            className="text-gray underline"
            to="https://www.linkedin.com/in/hassan-ahmed-khan-533772233/"
            target="_blank"
          >
            Hassan Ahmed Khan
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
