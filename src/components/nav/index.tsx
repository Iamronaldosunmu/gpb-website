import { easeIn, motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";
import Container from "../container";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSize from "../../hooks/useSize";

const Nav = () => {
	const [activeTab, setActiveTab] = useState("Home");
	const navItems = [{ text: "Home", to: "/home" }, { text: "Shop", to: "/shop" }, { text: "About Us", to: "/about-us" }, { text: "Book" }, { text: "Membership" }, { text: "Clients", to: "/clients" }, { text: "Digital Printing" }];
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navigate = useNavigate();
	const [height, width] = useSize()

	return (
		<motion.nav animate={mobileNavOpen ? {height: "100%", transition: {duration: 0.3, ease: easeIn}} : {height: 64.8, transition: {delay: 0.5}}} className="fixed top-0 right-0 left-0 bg-[#FDFDFD] z-50 flex flex-col">
			<div className="w-full py-[16px] border-b border-b-black bg-white">
				<Container className="flex items-center justify-between font-bold lg:text-[28px] xl:text-[32px]">
					<img
						className="w-[32px] lg:w-[45px]"
						src="/assets/images/gpblogo.png"
					/>
					<p>GRAPES PATTERN BANK</p>
					<div className="hidden lg:flex items-center gap-[7px]">
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
					<motion.div
						whileTap={{ scale: 0.85 }}
						className="mobile-nav lg:hidden flex"
						onClick={() => setMobileNavOpen(!mobileNavOpen)}
					>
						<motion.div animate={mobileNavOpen ? {rotateZ: 45, y: 4, transition: {duration: 0.2}} : {}} className="nav-rect"></motion.div>
						<motion.div animate={mobileNavOpen ? {opacity: 0, transition: {duration: 0.1}} : {opacity: 1, transition: {delay: 0.3}}} className="nav-rect"></motion.div>
						<motion.div animate={mobileNavOpen ? {rotateZ: -45, y: -5, transition: {duration: 0.2}} : {}} className="nav-rect"></motion.div>
					</motion.div>
				</Container>
			</div>
			<div className="w-full py-[15px] border-b border-b-black hidden lg:flex justify-center gap-[29px] bg-white">
				{navItems.map((item: { text: string; to?: string }, index: number) => (
					<button
						onClick={() => setActiveTab(item.text)}
						className={`text-[19px] rounded-full relative `}
						key={index}
					>
						{/* {activeTab == item.text && <motion.div layoutId="active-pill" className="absolute  rounded-full bg-black h-[3px] w-full -bottom-1"></motion.div>} */}
						<Link
							to={item.to || "/home"}
							className="relative"
						>
							{item.text}
						</Link>
					</button>
				))}
			</div>
			{width < 1024 && <motion.div animate={{height: mobileNavOpen ? "100%" :  0 }} style={{paddingBottom: mobileNavOpen ? 30 : 0}} className="w-full py-[30px] h-full flex flex-col justify-between">
				<div className="overflow-hidden z-40 px-[20px] md:px-[40px] text-[40px] font-semibold">
					{navItems.map((item, index: number) => (
                      <motion.div
							onClick={() => { navigate(item.to);  setMobileNavOpen(false)}}
                        initial={{ y: 45, opacity: 0 }}
                        animate={
                          mobileNavOpen
                            ? {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.4, delay: 0.9 + (index * 0.1 )  },
                              }
                            : { y: 45, transition: { duration: 0.3 } }
                        }
                      >
                        {item.text}
                      </motion.div>
					))}
                    </div>
			</motion.div>}
		</motion.nav>
	);
};

export default Nav;
