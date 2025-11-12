const PersonalDetails = () => {
  return (
    <section className="about-section container bottom-padded pt-15 max-sm:pt-0 flex justify-between max-sm:flex-col max-sm:gap-7.5">
      <div className="col-1 w-[45%] max-sm:w-full">
        <picture>
          <source
            srcSet="/images/aboutImageMobile.webp"
            media="(max-width: 767px)"
          />
          <source srcSet="/images/aboutImage.webp" media="(min-width: 768px)" />
          <img
            className="w-full"
            src="/images/aboutImage.webp"
            alt="About Image"
          />
        </picture>
      </div>
      <div className="col-2 w-[50%] max-sm:w-full">
        <div className="top">
          <p className="text-xl font-medium py-2.5 px-4.5 rounded-md bg-white w-fit mb-5 max-sm:text-sm max-sm:text-center max-sm:w-full">
            Welcome to the world of captivating web design!
          </p>
          <h1 className="text-dark text-[3.2rem] font-semibold leading-tight max-sm:text-[2.375rem] max-sm:text-center max-[1025px]:text-4xl">
            I'm Jeffery Cannon
          </h1>
          <p className="text-lg mt-2.5 mb-10 text-grey max-sm:text-center max-sm:text-sm">
            A skilled web designer with a passion for creating visually stunning
            and user-friendly websites. With a keen eye for detail and a
            commitment to excellence, I specialize in crafting online
            experiences that leave a lasting impression. From concept to launch,
            I collaborate closely with clients to bring their visions to life
            and ensure their digital presence stands out from the crowd. With my
            expertise and dedication, I am here to help you elevate your online
            presence and make a powerful impact in the digital landscape.
          </p>
        </div>
        <div className="bottom flex items-center border-b border-t border-primary py-10 mt-10 gap-12.5 max-sm:gap-10 max-sm:border-b-0 max-sm:border-t-0 max-sm:flex-col max-sm:bg-white max-sm:rounded-[10px] max-sm:px-7.5">
          <div className="counter w-[33.33%] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:gap-7.5 max-sm:items-center max-sm:border-b max-sm:border-b-border max-sm:pb-7.5">
            <h2 className="text-5xl font-bold max-[1025px]:text-4xl">
              55<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium max-sm:text-sm">
              Completed Projects
            </p>
          </div>
          <div className="counter w-[33.33%] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:gap-7.5 max-sm:items-center max-sm:border-b max-sm:border-b-border max-sm:pb-7.5">
            <h2 className="text-5xl font-bold max-[1025px]:text-4xl">
              20<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium max-sm:text-sm">
              Happy Customers
            </p>
          </div>
          <div className="counter w-[33.33%] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:gap-7.5 max-sm:items-center">
            <h2 className="text-5xl font-bold max-[1025px]:text-4xl">
              08<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium max-sm:text-sm">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
