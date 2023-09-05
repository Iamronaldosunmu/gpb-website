import SectionGrid from "../../../components/sectiongrid";

const AboutUs = () => {
  return (
    <SectionGrid
      textSectionBgColor="#A12E2E"
      textSectionHeader="Learn Our Story"
      textSectionContent="Grapes pattern bank is a design and media agency that offers surface  pattern and design printing services "
      textSectionCtaButtonText="READ MORE"
      OtherSectionComponent={
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover scale-[1.005]"
            src="/assets/images/about-us-img.jpg"
          />
        </div>
      }
    />
  );
};
export default AboutUs;
