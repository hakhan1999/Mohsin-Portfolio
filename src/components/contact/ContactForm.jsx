import Button from "../home/Button";

const ContactForm = () => {
  return (
    <div className="form-wrapper p-15 bg-white rounded-lg">
      <form action="">
        <div className="row mb-5 flex justify-between">
          <input
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            type="text"
            name="f-name"
            placeholder="First Name"
          />
          <input
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            type="text"
            name="l-name"
            placeholder="Last Name"
          />
        </div>
        <div className="row mb-5 flex justify-between">
          <input
            type="email"
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            name="email"
            placeholder="Email"
          />
          <input
            type="phone"
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className="row bg-[#F5F3F0] rounded-xl border border-border px-7 py-10">
          <p className="text-gray text-lg leading-normal font-medium mb-5">
            Why are you contacting us?
          </p>
          <div className="checkboxes-wrapper flex flex-wrap justify-between gap-y-6">
            <div className="flex checkbox w-[48%]">
              <input type="checkbox" className="w-7 h-7" name="web-design" />
              <label className="text-gray text-lg ml-2.5">Web Design</label>
            </div>
            <div className="flex checkbox w-[48%]">
              <input type="checkbox" className="w-7 h-7" name="collaboration" />
              <label className="text-gray text-lg ml-2.5">Collaboration</label>
            </div>
            <div className="flex checkbox w-[48%]">
              <input
                type="checkbox"
                className="w-7 h-7"
                name="mobile-app-design"
              />
              <label className="text-gray text-lg ml-2.5">
                Mobile App Design
              </label>
            </div>
            <div className="flex checkbox w-[48%]">
              <input type="checkbox" className="w-7 h-7" name="others" />
              <label className="text-gray text-lg ml-2.5">Others</label>
            </div>
          </div>
        </div>
        <div className="row  my-5">
          <textarea
            className="h-48 bg-[#F5F3F0] rounded-xl border border-border px-7 py-8 w-full placeholder:text-gray placeholder:text-lg text-lg"
            name="message"
            placeholder="Your Message Here..."
          />
        </div>
        <div className="row flex-center">
          <button
            className="flex gap-[0.578rem] w-fit bg-primary rounded-md transition hover:bg-primary-hover text-white px-11 py-4.5 text-lg font-medium cursor-pointer"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
