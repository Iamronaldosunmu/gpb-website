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
    <div className="py-[195px]">
      <h2 className="font-medium text-[40px] text-center mb-[95px]">
        This Comfort Is Custom
      </h2>
      <Container className="flex justify-between">
        {featureData.map((item) => (
          <Feature imageUrl={item.imageUrl} description={item.text} />
        ))}
      </Container>
    </div>
  );
};

export default Features;
