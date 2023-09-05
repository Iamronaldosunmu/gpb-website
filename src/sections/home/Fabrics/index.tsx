import SectionGrid from "../../../components/sectiongrid";

const Fabrics = () => {
  return (
    <SectionGrid
      textSectionHeader="#GPBFABRICS"
      textSectionBgColor="#A12E2E"
      textSectionContent={`We have over 150 different fabrics that we are able to print on digitally
      Ranging from silks to cottons, swimwear fabrics, polyesters, viscose , suede etc.
      \n \n
      All our fabrics are pre and post treated to offer excellent wash fastness and Durability with digital printing.`}
      textSectionCtaButtonText="Clients"
      OtherSectionComponent={
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover scale-[1.005]"
            src="/assets/images/fabrics.png"
          />
        </div>
      }
      reversed
    />
  );
};

export default Fabrics;
