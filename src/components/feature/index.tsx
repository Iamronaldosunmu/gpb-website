interface FeatureProps {
  imageUrl: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <div className="w-[260px] h-[260px]">
        <img className="w-full h-full rounded-full" src={imageUrl} />
      </div>
      <p className="max-w-[300px] text-[32px] text-center">{description}</p>
    </div>
  );
};

export default Feature;
