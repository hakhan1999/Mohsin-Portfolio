import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Me", path: "/about-me/" },
  { id: 3, name: "Portfolio", path: "/portfolio/" },
  { id: 4, name: "Contact Me", path: "/contact-me/" },
  {
    id: 5,
    name: "Book a Call",
    path: "tel:+923212812958",
    icon: "/images/phone.svg",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="container flex justify-between items-center py-8 max-sm:py-[1.531rem] border-b border-b-border relative">
      {/* Logo */}
      <div className="logo">
        <NavLink
          className="text-primary text-2xl max-sm:text-lg font-semibold"
          to="/"
        >
          Mohsin Alam.
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-7.5">
          {navItems.map((item) => {
            if (item.id === 5) {
              return (
                <li key={item.id}>
                  <NavLink
                    className="flex gap-[0.578rem] bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5"
                    to={item.path}
                  >
                    <img className="w-5" src={item.icon} alt="Phone Icon" />
                    <span className="text-lg font-medium">{item.name}</span>
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    `text-lg text-gray transition font-medium hover:font-semibold ${
                      isActive
                        ? "px-5.5 bg-white py-3 rounded-md font-semibold"
                        : ""
                    }`
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* Simple burger icon */}
        <img src="/images/hamburger.svg" alt="Mobile Menu Toggle" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="text-2xl text-gray font-semibold"
                onClick={() => setMenuOpen(false)} // close on click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
