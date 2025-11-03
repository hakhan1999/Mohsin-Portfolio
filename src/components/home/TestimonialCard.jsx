const TestimonialCard = ({ name, description, product }) => {
  return (
    <div className="p-12.5 rounded-xl bg-white">
      <h3 className="font-medium text-xl leading-normal text-gray">{name}</h3>
      <p className="text-[#666666] text-lg leading-normal mb-5">{product}</p>

      <div className="stars flex justify-start gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="src/assets/images/star.svg"
            alt="Star"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(26%) sepia(100%) saturate(7456%) hue-rotate(263deg) brightness(87%) contrast(137%)",
            }}
            className="w-4"
          />
        ))}
      </div>

      <p className="text-sm leading-normal text-grey min-h-52">{description}</p>
    </div>
  );
};

export default TestimonialCard;
