import Works from "../components/home/Works";
import InnerHero from "../components/portfolio/InnerHero";

const innerWorks = [
  {
    id: 1,
    name: "90 Pound Site",
    imagePath: "/images/90poundsite.webp",
    link: "https://90poundsite.com/",
  },
  {
    id: 2,
    name: "Abdul Latif Jameel Machinery",
    imagePath: "/images/alj-machinery.webp",
    link: "https://aljmachinery.com/",
  },
  {
    id: 3,
    name: "Arteyo",
    imagePath: "/images/arteyo.webp",
    link: "https://arteyo.com/",
  },
  {
    id: 4,
    name: "EA World",
    imagePath: "/images/eaworld.webp",
    link: "https://eaworld.com/",
  },
  {
    id: 5,
    name: "Grateful4u",
    imagePath: "/images/grateful4.webp",
    link: "https://grateful4u.org/",
  },
  {
    id: 6,
    name: "H2O Homes",
    imagePath: "/images/h2ohome.webp",
    link: "https://h2ohome.ae/",
  },
  {
    id: 7,
    name: "Homeblocks",
    imagePath: "/images/homeblocks.webp",
    link: "https://homeblocks.io/",
  },
  {
    id: 8,
    name: "Secure Networks",
    imagePath: "/images/securenetwork.webp",
    link: "https://securenetworks.pk/",
  },
  {
    id: 9,
    name: "Softpak",
    imagePath: "/images/softpak.webp",
    link: "https://softpak.com/",
  },
  {
    id: 10,
    name: "TanLink",
    imagePath: "/images/tanlink.webp",
    link: "https://tan-link.com/",
  },
  {
    id: 11,
    name: "Verona",
    imagePath: "/images/verona.webp",
    link: "https://vrubinetterie.it/",
  },
  {
    id: 12,
    name: "VibeFX",
    imagePath: "/images/vibefx.webp",
    link: "https://vibefx.ca/",
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
        list1="50+ Completed Projects"
        list2="20+ Happy Customers"
        list3="05+ Years of Experience"
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
