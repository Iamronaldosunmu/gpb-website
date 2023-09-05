import { useState } from "react";
import { motion } from "framer-motion";
import { defaultEase } from "../../utils/framer-default-animations";
import Like from "../like";

interface PrintItemProps {
  oldPrice: string;
  newPrice: string;
  prductName: string;
}

const PrintItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="overflow-hidden h-[468px]"
      >
        <div className="overflow-hidden h-full">
          <motion.img
            animate={{
              scale: isHovered ? 1.1 : 1,
              transition: { duration: 0.4, ease: defaultEase },
            }}
            className="w-full h-full object-cover"
            src="/assets/patterns/blue-beauty.png"
          />
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: isHovered ? -42 : 0,
            transition: { duration: 0.3, ease: defaultEase },
          }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 1 }}
          className=" cursor-pointer w-full h-[42px] bg-[rgba(255,255,255,0.7)] flex items-center justify-center font-bold text-[20px]"
        >
          QUICK VIEW
        </motion.div>
      </div>
      <div className="mt-[16px] flex justify-between items-center">
        <div className="font-semibold">
          <p>SHINE</p>
          <div className="flex gap-[7px]">
            <p>N80,000</p>
            <p className="">N98,700</p>
          </div>
        </div>
        <div onClick={() => setIsLiked(!isLiked)} className="px-[11px] outline-0">
          <Like liked={isLiked} />
        </div>
      </div>
    </div>
  );
};
export default PrintItem;
