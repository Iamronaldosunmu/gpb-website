import Testimonial from "../../../components/Testimonial";
import Container from "../../../components/container";

const TestimonialGroup = () => {
  const testimonialData = [
    {
      name: "Lana Bernier",
      position: "Senior Paradigm Strategist",
      url: "/assets/images/testimonialImage1.png",
      testimonial:
        "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    },
    {
      name: "Lana Bernier",
      position: "Senior Paradigm Strategist",
      url: "/assets/images/testimonialImage2.png",
      testimonial:
        "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    },
    {
      name: "Lana Bernier",
      position: "Senior Paradigm Strategist",
      url: "/assets/images/testimonialImage3.png",
      testimonial:
        "Dude, your stuff is the bomb! House rent is the real deal! I STRONGLY recommend house rent to EVERYONE interested in running a successful online business!",
    },
  ];
  return (
    <div className="w-full">
      <Container className="py-[160px] flex lg:block flex-col items-center">
        <h2 data-aos="fade-in" className="text-center font-semibold text-[32px] md:text-[40px]">TESTIMONIALS</h2>
        <p data-aos="fade-in" className="text-center text-[16px] md:text-[24px] mt-[8.1px]">
          See what customers are saying
        </p>

        <div className="w-full flex flex-col lg:grid grid-cols-3 gap-[50px] lg:gap-[27px] mt-[68px] max-w-[450px] lg:max-w-none">
          {testimonialData.map((props, index) => (
            <Testimonial key={index} {...props} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialGroup;
