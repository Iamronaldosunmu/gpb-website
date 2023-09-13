import Container from "../../../components/container";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { motion } from "framer-motion";

const BottomFooter = () => {
  const navItems = [
    "Privacy Policy",
    "Return Policy",
    "Contact Us",
    "Please Note",
  ];
  return (
    <>
      <div className="w-full py-[30px] border-b border-t mb-[5rem] border-t-black border-b-black flex justify-center gap-[30px] ">
        {navItems.map((item, index) => (
          <button className="text-[19px] " key={index}>
            {item}
          </button>
        ))}
      </div>
      <section className="w-full">
        <div className="w-full bg-[#F4F1EE] pt-[120px] pb-[43px]">
          <Container className="flex justify-between items-center">
            <div className="flex-col flex">
              <p className="font-semibold text-[24px]">GRAPES PATTERN BANK</p>
              <div className="mt-[30px]">
                <div className="text-[20px] flex gap-[80px]">
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
