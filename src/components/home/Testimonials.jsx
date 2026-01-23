import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const reviews = [
  {
    id: 1,
    name: "Muhammad Meraj",
    product: "h2ohome.ae",
    description:
      "I am extremely impressed with the website that was designed for H2O Home. The design is modern, user-friendly, and visually captivating, perfectly representing our brand. The team’s attention to detail and their ability to understand our needs resulted in a seamless experience for our customers. I highly recommend their services for anyone looking to enhance their online presence with a top-tier design.",
  },
  {
    id: 2,
    name: "Naaz Scheik",
    product: "softpak.com",
    description:
      "Working with this team was an absolute pleasure. They transformed our vision into an intuitive and visually stunning website. The attention to detail and the focus on creating a seamless user experience really set them apart. The project was delivered on schedule, and their professionalism throughout the process was top-notch. I wholeheartedly recommend their services.",
  },
  {
    id: 3,
    name: "Nash Abbas",
    product: "tan-link.com",
    description:
      "The design work provided for Tan-Link was outstanding. The team took the time to understand our goals and created a website that not only looks amazing but also provides an excellent user experience. Their ability to handle complex design challenges and deliver on time was impressive. I strongly recommend them to anyone looking for a reliable and skilled design team.",
  },
  {
    id: 4,
    name: "Mark van Bommel",
    product: "vibefx.ca",
    description:
      "We wanted a unique and engaging web experience, and Jeffery delivered. His deep understanding of both design and user experience made all the difference. Highly recommend for anyone looking for exceptional UI/UX work.",
  },
  {
    id: 5,
    name: "Sohail Tanveer",
    product: "homeblocks.io",
    description:
      "I couldn’t be happier with the website designed for Homeblocks. The team demonstrated an in-depth understanding of our requirements and translated that into a visually stunning, user-friendly platform. Their creative approach and attention to detail were top-notch, and the project was delivered within the expected timeline. I highly recommend their services for anyone looking for exceptional web design.",
  },
  {
    id: 6,
    name: "Ryan Harrison",
    product: "arteyo.com",
    description:
      "The quality of work delivered was outstanding. The design not only looks fantastic but also enhances the usability of our platform. Their commitment to excellence and responsiveness to feedback made the project effortless. I’d gladly work with them again.",
  },
];

const Testimonials = () => {
  return (
    <section className="container bottom-padded testimonials overflowShapes relative">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5 max-sm:text-center max-sm:text-[1.75rem] max-[1025px]:text-4xl">
          What My Clients Say About Me
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray max-sm:text-sm max-sm:text-center">
          Here's what some of my satisfied clients have to say about my work
        </p>
      </div>

      <p className="pb-7 border-b border-b-border text-grey text-xl font-medium max-sm:text-sm">
        {reviews.length} Total Reviews
      </p>
      <div className="relative overflowShapes before:content-[''] before:absolute before:-right-24 before:top-0 before:h-full before:w-20 before:bg-bg before:z-2 after:content-[''] after:absolute after:-left-24 after:top-0 after:h-full after:w-20 after:bg-bg after:z-2">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1500}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          className="overflow-visible! mt-12.5"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard
                name={item.name}
                product={item.product}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
