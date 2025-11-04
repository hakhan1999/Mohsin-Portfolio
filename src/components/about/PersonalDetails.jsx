const PersonalDetails = () => {
  return (
    <section className="about-section container bottom-padded pt-20 flex justify-between">
      <div className="col-1 w-[45%]">
        <img
          className="w-full"
          src="src/assets/images/aboutImage.webp"
          alt="About Image"
        />
      </div>
      <div className="col-2 w-[50%]">
        <div className="top">
          <p className="text-xl font-medium py-2.5 px-4.5 rounded-md bg-white w-fit mb-5">
            Welcome to the world of captivating web design!
          </p>
          <h1 className="text-dark text-[3.2rem] font-semibold leading-tight">
            I'm Jeffery Cannon
          </h1>
          <p className="text-lg mt-2.5 mb-10 text-grey">
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
        <div className="bottom flex items-center border-b border-t border-primary py-10 mt-10 gap-12.5">
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              55<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium">Completed Projects</p>
          </div>
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              20<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium">Happy Customers</p>
          </div>
          <div className="counter w-[33.33%]">
            <h2 className="text-5xl font-bold">
              08<span className="text-primary">+</span>
            </h2>
            <p className="text-lg mt-2 text-grey font-medium">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
