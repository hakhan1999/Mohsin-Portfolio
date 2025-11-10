import { useRef, useState } from "react";

const Accordion = ({ title, description, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="p-7.5 max-sm:p-5 bg-bg rounded-xl relative">
      <div className="accordion-content">
        <h3
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-xl text-gray font-medium pr-20 cursor-pointer max-sm:text-[1rem] max-sm:leading-6"
        >
          {title}
        </h3>
        <p
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
          className={`text-lg  text-gray leading-normal transition pr-20 max-sm:pr-0 max-sm:text-sm  ${
            isOpen
              ? "opacity-100 max-h-96 pointer-events-all mt-4"
              : " opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          {description}
        </p>
      </div>

      <div
        className={`toggle p-[0.906rem] max-sm:p-[0.688rem]  rounded-lg border transition border-border hover:bg-primary hover:border-primary absolute top-5.5 max-sm:top-5 right-7.5 max-sm:right-5 cursor-pointer group
    ${isOpen ? "bg-primary border-primary" : "bg-transparent border-border"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/images/accordionToggle.svg"
          alt="Accordion Toggle"
          className={`w-4 transition
      ${
        isOpen
          ? "filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(180deg)_brightness(104%)_contrast(102%)]"
          : ""
      }
      group-hover:filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(180deg)_brightness(104%)_contrast(102%)]
      ${isOpen ? "rotate-45" : "rotate-0"}`}
        />
      </div>
    </div>
  );
};

export default Accordion;
