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
  {
    id: 5,
    name: "Book a Call",
    path: "tel:+923212812958",
    icon: "src/assets/images/phone.svg",
  },
];

const Header = () => {
  return (
    <div className="container flex items-center justify-between py-8 border border-b-border ">
      <div className="logo">
        <NavLink className="text-primary text-lg font-semibold" to="/">
          Jeffery Cannon.
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="flex items-center gap-5">
          {navItems.map((item) => {
            if (item.id === 5) {
              return (
                <li key={item.id}>
                  <NavLink
                    className="flex items-center gap-[0.578rem] bg-primary rounded-md transition-all duration-400 ease-out hover:bg-primary-hover text-white px-4 py-3.5"
                    to={item.path}
                  >
                    <img src={item.icon} alt="Phone Icon" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={item.id}>
                <NavLink
                  className={({ isActive }) =>
                    `text-sm text-gray transition-all duration-400 ease-out font-medium hover:font-semibold  ${
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
    </div>
  );
};

export default Header;
