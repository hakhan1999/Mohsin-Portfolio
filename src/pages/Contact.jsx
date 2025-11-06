import ContactDetails from "../components/contact/ContactDetails";
import FAQ from "../components/home/FAQ";
import InnerHero from "../components/portfolio/InnerHero";

const ContactUs = () => {
  return (
    <>
      <InnerHero
        title="We’d love to here from you."
        description="Here's what some of my satisfied clients have to say about my work"
        mainIcon="/images/contactHero.svg"
        icon1="/images/24-7.svg"
        icon2="/images/quick.svg"
        icon3="/images/flexible.svg"
        list1="24 / 7 Assistance"
        list2="Quick Change Resolutions"
        list3="Flexible Working hours"
      />
      <ContactDetails />
      <FAQ />
    </>
  );
};

export default ContactUs;
