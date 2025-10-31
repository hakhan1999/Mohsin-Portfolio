import React from "react";
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
    path: "/about-us",
  },
  {
    id: 3,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact Me",
    path: "/contact-us",
  },
];

const socialLinks = [
  {
    id: 1,
    link: "#",
    imgLink: "src/assets/images/linkedIn.svg",
  },
  {
    id: 2,
    link: "#",
    imgLink: "src/assets/images/twitter.svg",
  },
  {
    id: 3,
    link: "#",
    imgLink: "src/assets/images/dribble.svg",
  },
];

const contactLinks = [
  {
    id: 1,
    text: "jefferycannon@gmail.com",
    iconPath: "src/assets/images/email.svg",
    link: "mailto:jefferycannon@gmail.com",
  },
  {
    id: 2,
    text: "+91 91813 23 2309",
    iconPath: "src/assets/images/phone-blue.svg",
    link: "tel:+91 91813 23 2309",
  },
  {
    id: 3,
    text: "Somewhere in the World",
    iconPath: "src/assets/images/location.svg",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer container border-t border-t-border">
      <div className="top flex items-center justify-between pt-10 pb-5">
        <NavLink className="text-primary text-lg font-semibold" to="/">
          Jeffery Cannon.
        </NavLink>
        <ul className="flex items-center gap-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                className="text-sm text-gray transition-all duration-400 ease-out font-medium hover:font-semibold "
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="social flex items-center gap-3.5">
          {socialLinks.map((item) => (
            <NavLink
              className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition-all duration-400 ease-out hover:bg-primary-hover"
              to={item.path}
              key={item.id}
            >
              <img className="w-5" src={item.imgLink} alt="Social Icon" />
            </NavLink>
          ))}
        </div>
      </div>
      <div className="middle flex justify-center">
        <div className="contactLinksWrapper flex items-center justify-center gap-12 py-[1.375rem] px-7 border border-border rounded-lg">
          {contactLinks.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={`flex items-center gap-[0.478rem] relative ${
                index !== 0
                  ? "before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-4 before:bg-border"
                  : ""
              }`}
            >
              <img src={item.iconPath} alt="Social Icon" />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bottom flex justify-center py-5">
        <p className="text-light-grey text-sm">
          Copyright © 2023 Jeffery Cannon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
