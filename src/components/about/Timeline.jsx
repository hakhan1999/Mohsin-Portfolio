import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    id: 1,
    year: "Now",
    title: "Expanding Horizons",
    description:
      "Fueled by curiosity and passion for design, I expanded my expertise by exploring modern UI/UX practices and emerging trends, focusing on creating intuitive and scalable digital experiences that evolve with user needs and industry innovation",
    iconPath: "/images/now.svg",
    color: "#9E00FF",
  },
  {
    id: 2,
    year: "2025",
    title: "Scalable & Strategic Design",
    description:
      "Focused on building scalable UI/UX solutions, aligning design with business goals, and delivering consistent, high-quality digital experiences across platforms.",
    iconPath: "/images/2022.svg",
    color: "#5EDC11",
  },
  {
    id: 3,
    year: "2024",
    title: "User-Centered Design Practice",
    description:
      "Deepened my UI/UX expertise by designing intuitive user experiences, improving interaction design, and working closely with stakeholders to solve real user problems.",
    iconPath: "/images/2021.svg",
    color: "#FFCE22",
  },
  {
    id: 4,
    year: "2023",
    title: "Transition to UI/UX Design",
    description:
      "Moved into UI/UX design, combining visual design experience with usability principles. Focused on interface design, user flows, and responsive layouts for digital products.",
    iconPath: "/images/2020.svg",
    color: "#FF7222",
  },
  {
    id: 5,
    year: "2022",
    title: "Skill Growth & Creative Exploration",
    description:
      "Expanded my graphic design expertise by working on diverse projects, strengthening branding skills, and refining visual storytelling through collaboration with teams and clients.",
    iconPath: "/images/2019.svg",
    color: "#FF22E9",
  },
  {
    id: 6,
    year: "2021",
    title: "Graphic Design Foundations",
    description:
      "Began my journey as a graphic designer, learning the fundamentals of visual communication, typography, color theory, and layout design while working on creative brand assets.",
    iconPath: "/images/2018.svg",
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (!window.lenis) return;

    const section = timelineRef.current;
    if (!section) return;

    // Get the absolute top of the section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const onScroll = ({ scroll }) => {
      // scroll is the Lenis scroll value (top of page)
      const progress =
        ((scroll + window.innerHeight / 2 - sectionTop) / sectionHeight) * 100;
      setScrollPercent(Math.min(Math.max(progress, 0), 100));
    };

    window.lenis.on("scroll", onScroll);

    return () => {
      window.lenis.off("scroll", onScroll);
    };
  }, []);

  const segmentHeight = 100 / (timelineData.length - 1);
  const currentIndex = Math.min(
    timelineData.length - 1,
    Math.max(
      0,
      Math.floor((scrollPercent - segmentHeight * 0.5) / segmentHeight),
    ),
  );
  const currentColor = timelineData[currentIndex]?.color || "#8B5CF6";

  return (
    <section className="container pb-110 timeline-sec">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          Milestones of My Career
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-grey w-[70%] mx-auto text-center max-sm:text-center max-sm:text-sm max-sm:w-full">
          A journey of continuous learning, creative problem-solving, and
          user-focused design growth.
        </p>
      </div>
      <div ref={timelineRef} className="relative flex flex-col items-center">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 w-0.5 bg-[#DDCCFF] h-full -translate-x-1/2 overflow-hidden">
          <div
            className="absolute left-0 top-0 w-full transition-all duration-500 ease-out"
            style={{
              height: `${scrollPercent}%`,
              backgroundColor: currentColor,
            }}
          />
        </div>

        {/* Timeline items */}
        {timelineData.map((item, index) => {
          if (index === timelineData.length - 1) {
            return (
              <div key={item.id} className="relative w-full">
                <p className="absolute top-0 left-1/2 -translate-x-1/2 text-lg text-gray py-2 px-6 rounded-lg bg-white font-medium after:content-[''] ">
                  {item.year}
                </p>
                <div className="p-12.5 max-sm:p-10 bg-white rounded-lg flex gap-7.5 max-sm:gap-6 max-sm:flex-col max-sm:justify-center max-sm:items-center! w-180 max-sm:w-full flex-start absolute top-20 left-1/2 -translate-x-1/2 after:block after:w-0 after:h-0 after:border-solid after:border-x-[11.5px] after:border-b-12 after:border-x-transparent after:border-b-white after:absolute after:-top-2 after:left-1/2 after:-translate-x-1/2">
                  <img
                    className="max-sm:w-17.5 max-[1025px]:w-16"
                    src={item.iconPath}
                    alt={`${item.year} Icon`}
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-lg text-gray font-semibold mb-2 text- w-full max-sm:text-[1rem] max-sm:text-center">
                      {item.title}
                    </p>
                    <p className="text-gray text-lg text-left max-sm:text-center max-sm:text-sm max-sm:leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={item.id}
                className={`relative flex gap-[9.3rem] max-[1025px]:gap-27 max-sm:gap-18 py-20 max-sm:pb-10 max-sm:flex-col ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                <p className="absolute top-0 left-1/2 -translate-x-1/2 text-lg text-gray py-2 px-6 rounded-lg bg-white font-medium max-sm:text-[1rem]">
                  {item.year}
                </p>

                <div
                  className={`p-12.5 max-[1025px]:p-7 bg-white rounded-lg flex gap-7.5 max-[1025px]:gap-5 max-sm:gap-6 w-[44%] max-sm:w-full relative max-sm:order-2 max-sm:p-10 max-sm:flex-col-reverse ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  } ${
                    index % 2 === 0
                      ? "after:content-[''] after:block after:w-0 after:h-0 after:border-solid after:border-y-[11.5px] after:border-l-12 after:border-y-transparent after:border-l-white after:absolute after:-right-2 max-sm:after:hidden"
                      : "after:content-[''] after:block after:w-0 after:h-0 after:border-solid after:border-y-[11.5px] after:border-r-12 after:border-y-transparent after:border-r-white after:absolute after:-left-2 max-sm:after:hidden"
                  }`}
                >
                  <p
                    className={`${
                      index % 2 === 0 ? "text-left" : ""
                    } text-gray text-lg max-sm:text-sm max-sm:text-center max-sm:leading-normal`}
                  >
                    {item.description}
                  </p>

                  <img
                    className="max-sm:w-17.5 max-[1025px]:w-16"
                    src={item.iconPath}
                    alt={`${item.year} Icon`}
                  />
                </div>
                <div className="flex justify-center absolute left-1/2 -translate-x-1/2 border-[0.438rem] border-secondary rounded-full bg-white w-12 h-12 max-sm:top-42 max-sm:z-2">
                  <div
                    className="w-3 h-3 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor:
                        scrollPercent > (index / timelineData.length) * 100 - 5
                          ? item.color
                          : "#DDCCFF",
                    }}
                  />
                </div>

                <p className="text-lg text-gray py-2 px-6 rounded-lg bg-white font-semibold max-sm:order-1 max-sm:text-[1rem]">
                  {item.title}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
