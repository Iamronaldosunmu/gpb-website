import SectionGrid from "../../../components/sectiongrid";

const Clients = () => {
  return (
    <SectionGrid
      textSectionContent="In the last five years we have worked with some amazing brands, creating mind blowing prints. The best part of what we do is getting to see the final product and witnessing how it influences various industries."
      textSectionBgColor="#E05E5E"
      textSectionCtaButtonText="Clients"
      textSectionHeader="#GPBCLIENTS"
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

export default Clients;
