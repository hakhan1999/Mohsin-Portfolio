import Benefits from "../components/home/Benefits";
import CreativeSkills from "../components/home/CreativeSkills";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Works from "../components/home/Works";

const works = [
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
];

const Home = () => {
  return (
    <>
      <Hero />
      <CreativeSkills />
      <Benefits />
      <Works
        title="My Works"
        subtitle="Here's what some of my satisfied clients have to say about my work"
        works={works}
        showButton={true}
      />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
