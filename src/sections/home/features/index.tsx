import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import Feature from "../../../components/feature";

const Features = () => {
  const featureData = [
    {
      imageUrl: "/assets/patterns/featurepattern1.jpg",
      text: "Hand-crafted in Portugal",
    },
    {
      imageUrl: "/assets/patterns/featurepattern2.jpg",
      text: "Made From Vegan Leather",
    },
    {
      imageUrl: "/assets/patterns/featurepattern3.jpg",
      text: "Patented In-Soles for Maximum Comfort",
    },
  ];
  return (
    <div className="py-[150px] xl:py-[195px]">
      <TextAnimation text="This Comfort Is Custom" className="flex overflow-hidden gap-[10px] justify-center font-medium text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] text-center mb-[95px]"/>
        
      <Container className="flex justify-between flex-col gap-[60px] lg:gap-0 lg:flex-row">
        {featureData.map((item) => (
          <Feature imageUrl={item.imageUrl} description={item.text} />
        ))}
      </Container>
    </div>
  );
};

export default Features;
