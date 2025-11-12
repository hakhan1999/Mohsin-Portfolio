const InnerHero = ({
  mainIcon,
  title,
  description,
  icon1,
  icon2,
  icon3,
  list1,
  list2,
  list3,
}) => {
  return (
    <section className="container sec-padded hero-inner">
      <div className="container inner-sec bg-white rounded-xl py-20 max-sm:py-10 max-sm:px-7!">
        <div className="w-full flex-center mb-8">
          <div className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover w-fit">
            <img className="w-5" src={mainIcon} alt="Hero Icon" />
          </div>
        </div>
        <h1 className="text-5xl text-center text-gray font-semibold mb-4 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          {title}
        </h1>
        <p className="text-lg text-grey text-center mb-8 max-sm:text-sm">
          {description}
        </p>
        <div className="middle flex justify-center">
          <div className="contactLinksWrapper flex justify-center gap-5 max-sm:gap-3.5 max-sm:flex-col max-sm:w-full">
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg max-sm:w-full max-sm:justify-center">
              <img src={icon1} className="max-sm:w-5" alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray max-sm:text-sm">
                {list1}
              </span>
            </div>
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg max-sm:w-full max-sm:justify-center">
              <img src={icon2} className="max-sm:w-5" alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray max-sm:text-sm">
                {list2}
              </span>
            </div>
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg max-sm:w-full max-sm:justify-center">
              <img src={icon3} className="max-sm:w-5" alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray max-sm:text-sm">
                {list3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
