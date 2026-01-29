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
  const [scrollPercent, setScrollPercent] = useState(0);
  const timelineRef = useRef(null);

  // Track scroll progress within the timeline section
  useEffect(() => {
    const handleScroll = () => {
      const section = timelineRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const sectionTop = scrollTop + rect.top;
      const sectionHeight = section.offsetHeight;

      const progress =
        ((scrollTop - sectionTop + window.innerHeight / 2) / sectionHeight) *
        100;

      setScrollPercent(Math.min(Math.max(progress, 0), 100));
    };

    handleScroll(); // initial call
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {/* Header */}
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          Milestones of My Career
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-grey w-[70%] mx-auto text-center max-sm:text-sm max-sm:w-full">
          A journey of continuous learning, creative problem-solving, and
          user-focused design growth.
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative flex flex-col items-center">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-[#DDCCFF]">
          <div
            className="absolute left-0 top-0 w-full transition-all duration-500 ease-out"
            style={{
              height: `${scrollPercent}%`,
              backgroundColor: currentColor,
            }}
          />
        </div>

        {/* Items */}
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === timelineData.length - 1;

          if (isLast) {
            return (
              <div key={item.id} className="relative w-full">
                <p className="absolute top-0 left-1/2 -translate-x-1/2 text-lg text-gray py-2 px-6 rounded-lg bg-white font-medium">
                  {item.year}
                </p>

                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-180 max-sm:w-full bg-white rounded-lg p-12.5 max-sm:p-10 flex gap-7.5 max-sm:flex-col max-sm:items-center">
                  <img
                    className="max-sm:w-17.5 max-[1025px]:w-16"
                    src={item.iconPath}
                    alt={`${item.year} icon`}
                  />

                  <div>
                    <p className="text-lg text-gray font-semibold mb-2 max-sm:text-center">
                      {item.title}
                    </p>
                    <p className="text-gray text-lg max-sm:text-sm max-sm:text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className={`relative flex py-20 gap-[9.3rem] max-sm:flex-col max-sm:gap-18 ${
                isEven ? "" : "flex-row-reverse"
              }`}
            >
              {/* Year */}
              <p className="absolute top-0 left-1/2 -translate-x-1/2 text-lg text-gray py-2 px-6 rounded-lg bg-white font-medium">
                {item.year}
              </p>

              {/* Card */}
              <div
                className={`relative w-[44%] max-sm:w-full bg-white rounded-lg p-12.5 max-sm:p-10 flex gap-7.5 max-sm:flex-col-reverse ${
                  isEven ? "" : "flex-row-reverse"
                }`}
              >
                <p className="text-gray text-lg max-sm:text-sm max-sm:text-center">
                  {item.description}
                </p>

                <img
                  className="max-sm:w-17.5 max-[1025px]:w-16"
                  src={item.iconPath}
                  alt={`${item.year} icon`}
                />
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-[0.438rem] border-secondary bg-white flex items-center justify-center">
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

              {/* Title */}
              <p className="text-lg text-gray py-2 px-6 rounded-lg bg-white font-semibold max-sm:text-center">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
