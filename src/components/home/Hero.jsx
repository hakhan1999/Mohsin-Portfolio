import { NavLink } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero container-left flex items-center max-sm:flex-col-reverse max-sm:gap-7.5">
      <div className="col-1 w-[67%] max-sm:w-full">
        <div className="top pr-30 max-sm:pr-0 flex-start flex-col max-sm:justify-center max-sm:items-center!">
          <p className="text-xl max-sm:text-lg font-medium py-2.5 px-4.5 rounded-md bg-white w-fit mb-5 text-[#4D4D4D]">
            Hello There 🤗
          </p>
          <h1 className="text-dark text-[3.625rem] max-sm:text-[2.375rem] font-semibold leading-tight max-sm:text-center">
            Jeffery Cannon Welcome's You!
          </h1>
          <p className="text-lg max-sm:text-sm max-sm:text-center mt-2.5 mb-10 max-sm:mb-6 text-gray">
            I am a passionate and experienced web designer, dedicated to
            creating visually stunning and highly functional websites. Explore
            my portfolio to see the power of effective design in action
          </p>
          <div className="buttons flex items-center gap-6 max-sm:gap-5">
            <NavLink
              className="flex items-center gap-[0.578rem] bg-primary rounded-md transition hover:bg-primary-hover text-white px-4 py-3.5"
              to="tel:+923162714782"
            >
              <img className="w-5" src="/images/phone.svg" alt="Phone Icon" />
              <span className="text-lg font-medium max-sm:text-sm">
                Book a Call
              </span>
            </NavLink>
            <Button
              link="/portfolio/"
              text="View Portfolio"
              className="w-fit"
            />
          </div>
        </div>
        <div className="bottom flex flex-wrap items-center bg-white py-10 px-12.5 mt-10 rounded-tl-xl rounded-bl-xl gap-7.5 max-sm:gap-2.5 max-sm:bg-transparent max-sm:py-0 max-sm:px-0">
          <div className="counter w-[33.33%] max-sm:w-full max-sm:bg-white max-sm:rounded-lg p-4.5">
            <h2 className="text-5xl font-bold max-sm:text-2xl max-sm:text-center">
              55<span className="text-primary">+</span>
            </h2>
            <p className="text-lg max-sm:text-sm mt-2 text-gray font-medium max-sm:text-center">
              Completed Projects
            </p>
          </div>
          <div className="counter w-[33.33%] max-sm:w-[48.5%] max-sm:bg-white max-sm:rounded-lg p-4.5">
            <h2 className="text-5xl font-bold max-sm:text-2xl max-sm:text-center">
              20<span className="text-primary">+</span>
            </h2>
            <p className="text-lg max-sm:text-sm mt-2 text-gray font-medium max-sm:text-center">
              Happy Customers
            </p>
          </div>
          <div className="counter w-[33.33%] max-sm:w-[48.5%] max-sm:bg-white max-sm:rounded-lg p-4.5">
            <h2 className="text-5xl font-bold max-sm:text-2xl max-sm:text-center">
              08<span className="text-primary">+</span>
            </h2>
            <p className="text-lg max-sm:text-sm mt-2 text-gray font-medium max-sm:text-center">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
      <div className="col-2 w-[40%] max-sm:w-full">
        <picture>
          <source
            srcSet="/images/heroImageMobile.webp"
            media="(max-width: 767px)"
          />
          <source srcSet="/images/heroImage.webp" media="(min-width: 768px)" />
          <img
            className="w-full"
            src="/images/heroImage.webp"
            alt="Hero Image"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
