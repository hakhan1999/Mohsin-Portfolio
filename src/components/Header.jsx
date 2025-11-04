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
    path: "/about-me",
  },
  {
    id: 3,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact Me",
    path: "/contact-me",
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
    <header className="container flex justify-between py-8 border-b border-b-border ">
      <div className="logo">
        <NavLink className="text-primary text-xl font-semibold" to="/">
          Jeffery Cannon.
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="flex gap-5">
          {navItems.map((item) => {
            if (item.id === 5) {
              return (
                <li key={item.id}>
                  <NavLink
                    className="flex gap-[0.578rem] bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5"
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
                    `text-sm text-gray transition font-medium hover:font-semibold  ${
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
    </header>
  );
};

export default Header;
