interface SectionGridProps {
  textSectionBgColor: string;
  textSectionHeader: string;
  textSectionContent: string;
  textSectionCtaButtonText: string;
  reversed?: boolean;
  OtherSectionComponent: JSX.Element;
}

const SectionGrid: React.FC<SectionGridProps> = ({
  textSectionHeader,
  textSectionBgColor,
  textSectionContent,
  textSectionCtaButtonText,
  reversed,
  OtherSectionComponent,
}) => {
  return (
    <section className="w-full grid grid-cols-2 min-h-[640px] grid-flow-dense ">
      <article
        style={{
          backgroundColor: textSectionBgColor,
          gridColumnStart: reversed ? 2 : 1,
          justifyContent: reversed ? "flex-end" : "flex-start",
        }}
        className="w-full h-full flex items-center py-[130px] "
      >
        <div
          style={
            reversed
              ? { paddingRight: "calc((100vw - 1220px)/2)" }
              : { paddingLeft: "calc((100vw - 1220px)/2)" }
          }
          className="flex flex-col gap-[36px] text-white"
        >
          <h2 className="text-[48px] font-bold ">{textSectionHeader}</h2>
          <p className="text-[30px] max-w-[500px]">{textSectionContent}</p>
          <button
            className={`text-[24px] py-[18px] px-[35px] border w-fit hover:bg-white transition-all duration-300 hover:text-[${textSectionBgColor}]`}
          >
            {textSectionCtaButtonText}
          </button>
        </div>
      </article>

      {OtherSectionComponent}
    </section>
  );
};

export default SectionGrid;
