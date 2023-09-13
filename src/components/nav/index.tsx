import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";
import Container from "../container";

const Nav = () => {
  const navItems = [
    { text: "Home" },
    { text: "Shop" },
    { text: "About Us" },
    { text: "Book" },
    { text: "Membership" },
    { text: "Clients" },
    { text: "Digital Printing" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 bg-[#FDFDFD] z-[200]">
      <div className="w-full py-[16px] border-b border-b-black">
        <Container className="flex items-center justify-between font-bold text-[32px]">
          <img className="w-[45px]" src="/assets/images/gpblogo.png" />
          <p>GRAPES PATTERN BANK</p>
          <div className="flex items-center gap-[7px]">
            <motion.img
              {...interactionAnimations}
              className="cursor-pointer"
              src="/assets/images/person.png"
            />
            <motion.img
              {...interactionAnimations}
              className="cursor-pointer"
              src="/assets/images/cart.png"
            />
            <motion.img
              {...interactionAnimations}
              className="cursor-pointer"
              src="/assets/images/favorite.png"
            />
          </div>
        </Container>
      </div>
      <div className="w-full py-[15px] border-b border-b-black flex justify-center gap-[29px]">
        {navItems.map((item: { text: string }, index: number) => (
          <button className="text-[19px] " key={index}>
            {item.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
