import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSize from "../../hooks/useSize";
import useCartStore from "../../store/cart";
import { interactionAnimations } from "../../utils/framer-default-animations";
import Container from "../container";
import useWishListStore from "../../store/wishList";

const Nav = () => {
	const navItems = [
		{ text: "Home", to: "/home" },
		{ text: "Shop", to: "/shop" },
		{ text: "About Us", to: "/about-us" },
		{ text: "Book", to: "/consultation" },
		// { text: "Membership", to: "/membership" },
		{ text: "Clients", to: "/clients" },
		{ text: "Digital Printing", to: "/get-a-quote" },
	];
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navigate = useNavigate();
	const [width] = useSize();
	const { pathname } = useLocation();
	const { cart } = useCartStore();
	const { wishList } = useWishListStore();

	const [itemJustAdded, setItemJustAdded] = useState(false);
	const [itemJustLiked, setItemJustLiked] = useState(false);

	useEffect(() => {
		setItemJustAdded(true);
		setTimeout(() => {
			setItemJustAdded(false);
		}, 180);
	}, [cart.length]);

	useEffect(() => {
		setItemJustLiked(true);
		setTimeout(() => {
			setItemJustLiked(false);
		}, 180);
	}, [wishList.length]);

	return (
		<>
			<motion.nav
				initial={{ height: 64.8, opacity: 0 }}
				animate={mobileNavOpen ? { height: "100%", opacity: 1, transition: { duration: 0.3, ease: easeIn, opacity: { duration: 0.3 } } } : { height: 64.8, opacity: 1, transition: { delay: 0.5, opacity: { duration: 0.3 } } }}
				className="fixed top-0 right-0 left-0 bg-[#FDFDFD] z-[100] flex flex-col"
			>
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
							<motion.div
								{...interactionAnimations}
								className="relative"
								animate={{ scale: itemJustAdded ? 1.1 : 1 }}
							>
								<img
									onClick={() => navigate("/cart")}
									className="cursor-pointer"
									src="/assets/images/cart.png"
								/>
								<p className="min-w-[20px] w-[20px] h-[20px] min-h-[20px] bg-[#AF9E7F] rounded-full absolute top-0 right-0 text-[12px] text-white flex items-center justify-center price">{cart?.length}</p>
							</motion.div>

							<motion.div
								{...interactionAnimations}
								className="relative"
								animate={{ scale: itemJustLiked ? 1.1 : 1 }}
							>
								<motion.img
									className="cursor-pointer"
									onClick={() => navigate("/wish-list")}
									src="/assets/images/favorite.png"
								/>
								<p className="min-w-[20px] w-[20px] h-[20px] min-h-[20px] bg-[#AF9E7F] rounded-full absolute top-0 right-0 text-[12px] text-white flex items-center justify-center price">{wishList?.length}</p>
							</motion.div>
						</div>
						<motion.div
							whileTap={{ scale: 0.85 }}
							className="mobile-nav lg:hidden flex"
							onClick={() => setMobileNavOpen(!mobileNavOpen)}
						>
							<motion.div
								animate={mobileNavOpen ? { rotateZ: 45, y: 4, transition: { duration: 0.2 } } : {}}
								className="nav-rect"
							></motion.div>
							<motion.div
								animate={mobileNavOpen ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 1, transition: { delay: 0.3 } }}
								className="nav-rect"
							></motion.div>
							<motion.div
								animate={mobileNavOpen ? { rotateZ: -45, y: -5, transition: { duration: 0.2 } } : {}}
								className="nav-rect"
							></motion.div>
						</motion.div>
					</Container>
				</div>
				<div className="w-full py-[15px] border-b border-b-black hidden lg:flex justify-center gap-[29px] bg-white">
					{navItems.map((item: { text: string; to?: string }, index: number) => (
						<button
							// onClick={() => setActiveTab(item.text)}
							className={`text-[19px] rounded-full relative ${pathname.includes(item.to as string) && "font-semibold"} transition-all duration-300 relative group`}
							key={index}
						>
							{/* {activeTab == item.text && <motion.div layoutId="active-pill" className="absolute  rounded-full bg-black h-[3px] w-full -bottom-1"></motion.div>} */}
							<Link
								to={item.to || "/home"}
								className="relative"
							>
								{item.text}
							</Link>
							<div className="w-0 group-hover:w-full transition-all duration-300 h-[1.5px] bg-black absolute -bottom-[2px]"></div>
						</button>
					))}
				</div>
				{width < 1024 && (
					<motion.div
						animate={{ height: mobileNavOpen ? "100%" : 0 }}
						style={{ paddingBottom: mobileNavOpen ? 30 : 0 }}
						className="w-full py-[30px] h-full flex flex-col justify-between"
					>
						<div className="overflow-hidden z-40 px-[20px] md:px-[40px] text-[40px] font-semibold">
							{navItems.map((item, index: number) => (
								<motion.div
									onClick={() => {
										navigate(item.to as string);
										setMobileNavOpen(false);
									}}
									initial={{ y: 45, opacity: 0 }}
									animate={
										mobileNavOpen
											? {
													y: 0,
													opacity: 1,
													transition: { duration: 0.4, delay: 0.9 + index * 0.1 },
											  }
											: { y: 45, transition: { duration: 0.3 } }
									}
								>
									{item.text}
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</motion.nav>
			<div className="fixed bottom-[20px] right-[20px] flex gap-[20px] z-40 lg:hidden">
				{cart.length > 0 && (
					<motion.div
						layout
						{...interactionAnimations}
						onClick={() => navigate("/cart")}
						className="w-[60px] h-[60px] rounded-full bg-white shadow-xl  flex items-center justify-center"
					>
						<motion.div
							{...interactionAnimations}
							className="relative flex items-center justify-center"
							animate={{ scale: itemJustAdded ? 1.1 : 1 }}
						>
							<img
								className="cursor-pointer"
								src="/assets/images/cart.png"
							/>
							<p className="min-w-[20px] w-[20px] h-[20px] min-h-[20px] bg-[#AF9E7F] rounded-full absolute top-0 right-0 text-[12px] text-white flex items-center justify-center price">{cart?.length}</p>
						</motion.div>
					</motion.div>
				)}
				{wishList?.length > 0 && (
					<motion.div
						animate={{ opacity: wishList?.length > 0 ? 1 : 0, transition: { delay: 0.5 } }}
						layout
						{...interactionAnimations}
						onClick={() => navigate("/wish-list")}
						className="w-[60px] h-[60px] rounded-full bg-white shadow-xl  flex items-center justify-center"
					>
						<motion.div
							{...interactionAnimations}
							className="relative"
							animate={{ scale: itemJustLiked ? 1.1 : 1 }}
						>
							<motion.img
								className="cursor-pointer"
								src="/assets/images/favorite.png"
							/>
							<p className="min-w-[20px] w-[20px] h-[20px] min-h-[20px] bg-[#AF9E7F] rounded-full absolute top-0 right-0 text-[12px] text-white flex items-center justify-center price">{wishList?.length}</p>
						</motion.div>
					</motion.div>
				)}
			</div>
		</>
	);
};

export default Nav;
