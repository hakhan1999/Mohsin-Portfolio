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
      <div className="container inner-sec bg-white rounded-xl py-20">
        <div className="w-full flex-center mb-8">
          <div className="p-2.5 rounded-md bg-primary shadow-[inset_0px_0px_14px_4px_#ffffff80] transition hover:bg-primary-hover w-fit">
            <img className="w-5" src={mainIcon} alt="Hero Icon" />
          </div>
        </div>
        <h1 className="text-5xl text-center text-gray font-semibold mb-4">
          {title}
        </h1>
        <p className="text-lg text-grey text-center mb-8">{description}</p>
        <div className="middle flex justify-center">
          <div className="contactLinksWrapper flex justify-center gap-5">
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg">
              <img src={icon1} alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray">{list1}</span>
            </div>
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg">
              <img src={icon2} alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray">{list2}</span>
            </div>
            <div className="flex gap-[0.478rem] relative py-[0.969rem] px-4 border border-border rounded-lg">
              <img src={icon3} alt="Hero List Icon" />
              <span className="font-medium text-lg text-gray">{list3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
