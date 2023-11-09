interface FeatureProps {
  imageUrl: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, description }) => {
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center gap-[36px] xl:gap-[40px]">
      <div className="w-[154px] h-[154px] md:w-[200px] md:h-[200px] xl:w-[260px] xl:h-[260px]">
        <img  className="w-full h-full rounded-full" src={imageUrl} />
      </div>
      <p  className="max-w-[250px] xl:max-w-[300px] text-[24px] lg:text-[26px]  text-center">{description}</p>
    </div>
  );
};

export default Feature;
