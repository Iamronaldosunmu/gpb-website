import { useEffect, useRef } from "react";

interface ClientItemProps {
  image: string;
}

const ClientItem = ({ image }: ClientItemProps) => {
  return (
    <div className="gallery-item-wrapper w-full h-full overflow-hidden">
      <div className="gallery-item w-full h-full relative overflow-hidden will-change-transform">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="gallery-item-image sepia"
        >
          
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="gallery-item-image masked"
        ></div>
      </div>
    </div>
  );
};

export default ClientItem;
