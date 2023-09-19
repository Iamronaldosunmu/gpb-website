import Container from "../../../components/container";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { motion } from "framer-motion";

const BottomFooter = () => {

  return (
    <>

      <section className="w-full">
        <div className="w-full bg-[#F4F1EE] pt-[40px] md:pt-[120px] pb-[36px] md:pb-[43px] ">
          <Container className="flex flex-col justify-between gap-[40px] lg:gap-0">
            <div className="flex-col flex w-full">
              <p className="font-semibold text-[22px] text-center lg:text-left">GRAPES PATTERN BANK</p>
              <div className="mt-[30px]">
                <div className="text-[16px] md:text-[20px] flex gap-[48px] md:gap-[80px] flex-col lg:flex-row">
                  <div className="flex flex-col gap-[5px]">
                    <p className="">Address: </p>
                    <p>Lagos, Nigeria</p>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <p className="">Email: </p>
                    <a
                      href="mailto:info@grapespatternbank.com"
                      className="underline"
                    >
                      info@grapespatternbank.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              href="https://www.instagram.com/grapespatternbank/"
              className="cursor-pointer"
            >
              <motion.img
                {...interactionAnimations}
                src="/assets/images/instagram-icon.svg"
              />
            </a>
          </Container>
        </div>
        <img
          className="h-[70px] w-full object-cover"
          src="/assets/images/footer-img.png"
        />
      </section>
    </>
  );
};

export default BottomFooter;
