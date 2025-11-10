const TestimonialCard = ({ name, description, product }) => {
  return (
    <div className="p-12.5 max-sm:p-7.5 rounded-xl bg-white">
      <h3 className="font-semibold text-xl leading-normal text-gray max-sm:text-lg">
        {name}
      </h3>
      <p className="text-[#666666] text-lg leading-normal mb-5 max-sm:text-sm">
        {product}
      </p>

      <div className="stars flex justify-start gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/images/star.svg"
            alt="Star"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(26%) sepia(100%) saturate(7456%) hue-rotate(263deg) brightness(87%) contrast(137%)",
            }}
            className="w-4"
          />
        ))}
      </div>

      <p className="text-[1rem] leading-normal text-gray min-h-72 max-sm:text-sm max-sm:min-h-60">
        {description}
      </p>
    </div>
  );
};

export default TestimonialCard;
