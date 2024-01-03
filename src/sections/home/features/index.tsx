import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import Feature from "../../../components/feature";

const Features = () => {
  const featureData = [
    {
      imageUrl: "/assets/patterns/featurepattern1.jpg",
      text: "Premium patterns uniquely designed for you",
    },
    {
      imageUrl: "/assets/patterns/featurepattern2.jpg",
      text: "Perfectly tailored fabrics to suit your taste",
    },
    {
      imageUrl: "/assets/patterns/featurepattern3.jpg",
      text: "Expertise, Experience and legacy!",
    },
  ];
  return (
    <div className="py-[150px] xl:py-[195px]">
      <TextAnimation text="Unmatched Expertise and Legacy" className="flex overflow-hidden gap-[10px] justify-center font-medium text-[24px] md:text-[28px] lg:text-[34px] xl:text-[36px] text-center mb-[95px]"/>
        
      <Container className="flex justify-between flex-col gap-[60px] lg:gap-0 lg:flex-row">
        {featureData.map((item) => (
          <Feature imageUrl={item.imageUrl} description={item.text} />
        ))}
      </Container>
    </div>
  );
};

export default Features;
