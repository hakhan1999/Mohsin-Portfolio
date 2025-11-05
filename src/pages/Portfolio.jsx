import Works from "../components/home/Works";
import InnerHero from "../components/portfolio/InnerHero";

const innerWorks = [
  {
    id: 1,
    name: "Z - Aura Perfume Website Design",
    imagePath: "/images/worksImage-1.webp",
    link: "#",
  },
  {
    id: 2,
    name: "Forhelp Charity Website Design",
    imagePath: "/images/worksImage-2.webp",
    link: "#",
  },
  {
    id: 3,
    name: "Skill Bridge Website Design",
    imagePath: "/images/worksImage-3.webp",
    link: "#",
  },
  {
    id: 4,
    name: "Z - Aura Perfume Website Design",
    imagePath: "/images/worksImage-1.webp",
    link: "#",
  },
  {
    id: 5,
    name: "Forhelp Charity Website Design",
    imagePath: "/images/worksImage-2.webp",
    link: "#",
  },
  {
    id: 6,
    name: "Skill Bridge Website Design",
    imagePath: "/images/worksImage-3.webp",
    link: "#",
  },
  {
    id: 7,
    name: "Z - Aura Perfume Website Design",
    imagePath: "/images/worksImage-1.webp",
    link: "#",
  },
  {
    id: 8,
    name: "Forhelp Charity Website Design",
    imagePath: "/images/worksImage-2.webp",
    link: "#",
  },
  {
    id: 9,
    name: "Skill Bridge Website Design",
    imagePath: "/images/worksImage-3.webp",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <>
      <InnerHero
        title="My Creative Portfolios"
        description="Heres what some of my satisfied clients have to say about my work"
        mainIcon="/images/portfolioHeroIcon.svg"
        icon1="/images/projects.svg"
        icon2="/images/customers.svg"
        icon3="/images/experience.svg"
        list1="55+ Completed Projects"
        list2="20+ Happy Customers"
        list3="08+ Years of Experience"
      />
      <Works
        title="My Works"
        subtitle="Here's what some of my satisfied clients have to say about my work"
        works={innerWorks}
        showButton={false}
      />
    </>
  );
};

export default Portfolio;
