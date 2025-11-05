import { NavLink } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero container-left flex items-center">
      <div className="col-1 w-[67%]">
        <div className="top pr-30">
          <p className="text-xl font-medium py-2.5 px-4.5 rounded-md bg-white w-fit mb-5 text-[#4D4D4D]">
            Hello There 🤗
          </p>
          <h1 className="text-dark text-[3.625rem] font-semibold leading-tight">
            Jeffery Cannon Welcome's You!
          </h1>
          <p className="text-lg mt-2.5 mb-10 text-gray">
            I am a passionate and experienced web designer, dedicated to
            creating visually stunning and highly functional websites. Explore
            my portfolio to see the power of effective design in action
          </p>
          <div className="buttons flex items-center gap-6">
            <NavLink
              className="flex items-center gap-[0.578rem] bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5"
              to="tel:+923162714782"
            >
              <img className="w-5" src="/images/phone.svg" alt="Phone Icon" />
              <span className="text-lg font-medium">Book a Call</span>
            </NavLink>
            <Button link="/portfolio/" text="View Portfolio" className="w-fit" />
          </div>
        </div>
        <div className="bottom flex items-center bg-white py-10 px-12.5 mt-10 rounded-tl-xl rounded-bl-xl gap-7.5">
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              55<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-gray font-medium">
              Completed Projects
            </p>
          </div>
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              20<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-gray font-medium">
              Happy Customers
            </p>
          </div>
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              08<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-gray font-medium">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
      <div className="col-2 w-[40%]">
        <img className="w-full" src="/images/heroImage.webp" alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
