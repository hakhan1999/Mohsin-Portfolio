import Benefits from "../components/home/Benefits";
import CreativeSkills from "../components/home/CreativeSkills";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Works from "../components/home/Works";

const works = [
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
