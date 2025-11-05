import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    product: "produce-ui.com",
    description:
      "Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.",
  },
  {
    id: 2,
    name: "Emily Roberts",
    product: "produce-ui.com",
    description:
      "I am thrilled with the website that Jeffery Cannon designed for my business. His ability to translate my vision into a visually stunning and user-friendly website was impressive. Jeffery's expertise in web design and user experience truly shines through in his work. He was responsive, professional, and delivered the project on time. I couldn't be happier with the outcome and highly recommend Jeffery to anyone in need of a top-notch web designer.",
  },
  {
    id: 3,
    name: "Laura Adams",
    product: "produce-ui.com",
    description:
      "I had the pleasure of collaborating with Jeffery Cannon on a web design project, and I am beyond impressed with the results. Jeffery's creativity and technical expertise transformed our website into a visually stunning and highly functional platform. His understanding of user experience design and attention to detail made a significant impact on our website's performance and user engagement. Jeffery's professionalism, timely delivery.",
  },
  {
    id: 4,
    name: "Laura Adams",
    product: "produce-ui.com",
    description:
      "I had the pleasure of collaborating with Jeffery Cannon on a web design project, and I am beyond impressed with the results. Jeffery's creativity and technical expertise transformed our website into a visually stunning and highly functional platform. His understanding of user experience design and attention to detail made a significant impact on our website's performance and user engagement. Jeffery's professionalism, timely delivery.",
  },
];

const Testimonials = () => {
  return (
    <section className="container bottom-padded testimonials overflowShapes relative">
      <div className="sec-title flex-center flex-col">
        <h2 className="text-5xl text-gray font-semibold mb-1.5">
          What My Clients Say About Me
        </h2>
        <p className="text-lg mt-2.5 mb-10 text-gray">
          Here's what some of my satisfied clients have to say about my work
        </p>
      </div>

      <p className="pb-7 border-b border-b-border text-grey text-xl font-medium">
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
            1024: { slidesPerView: 3 },
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
