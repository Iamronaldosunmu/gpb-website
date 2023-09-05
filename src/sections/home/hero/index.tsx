import Container from "../../../components/container";
import { motion } from "framer-motion";
import { interactionAnimations } from "../../../utils/framer-default-animations";

const Hero = () => {
  return (
    <section className="mt-[169px] relative">
      <img
        className="w-full max-h-[600px] object-cover"
        src="/assets/images/heroimage.png"
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[60.21%] to-[rgba(0,0,0,0.78)] z-10"></div>
      <div className="absolute bottom-[28px] z-10 left-0 right-0">
        <Container className="z-10">
          <motion.button
            {...interactionAnimations}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-[10px] px-[30px] text-[16px] flex items-center gap-[15px] rounded-full"
          >
            <span className="font-semibold">SHOP NOW</span>
            <img className="w-[16px]" src="/assets/images/arrow.svg" />
          </motion.button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;