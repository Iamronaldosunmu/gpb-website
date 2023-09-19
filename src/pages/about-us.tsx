import Container from "../components/container";
import Nav from "../components/nav";
import TextContainer from "../components/textcontainer";
import Footer from "../sections/Footer";
import { motion } from "framer-motion";

const AboutUs = () => {
	return (
		<main
			data-scroll-container
			className="pt-[140px] md:pt-[200px]"
		>
			<Nav />
			<TextContainer className="flex flex-col gap-[80px] text-center lg:text-left">
				<h1 className="text-center font-medium text-[40px] flex flex-wrap gap-x-[10px] justify-center overflow-hidden">
					{"About Grapes Pattern Bank".split(" ").map((word, index) => (
						<motion.div
							initial={{ y: 45, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
							}}
						>
							{word}
						</motion.div>
					))}
				</h1>
				<article className="text-[16px] md:text-[24px] gap-[40px] mt-[40px] flex flex-col">
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="800"
					>
						Grapes Pattern Bank is a Surface pattern design online store. Founded in 2017. We pride ourselves in providing our customers with unique and inspirational prints at affordable prices.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="1000"
					>
						We aim to be the best surface pattern design and print online go-to store in the world.We also offer consultancy and printing services to design companies looking to set themselves apart in the industry.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="1200"
					>
						We combine both African and modern elements to create mind blowing prints. Our creative team is made up of individuals who are well equipped in the print and pattern making industry.
					</p>
				</article>
			</TextContainer>
			<div className="w-full mt-[60px]">
				<img
					className="w-full h-full object-cover"
					src="/assets/images/about-us-1.png"
				/>
			</div>
			<Container className="hidden lg:block">
				<section className="mt-[153px] h-[1000px] grid grid-cols-[0.94fr_1.06fr] gap-[32px]">
					<div className="w-full h-full">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/about-us-1.png"
						/>
					</div>
					<div className="grid w-full h-full gap-[60px] grid-rows-[1.16fr_1fr]">
						<div className="w-full h-full">
							<img
								className="w-full h-full object-cover"
								src="/assets/images/about-us-1.png"
							/>
						</div>
						<div className="w-full h-full grid grid-cols-[1fr_1fr] gap-[35px]">
							<div className="w-full h-full">
								<img
									className="w-full h-full object-cover"
									src="/assets/images/about-us-1.png"
								/>
							</div>
							<div className="w-full h-full">
								<img
									className="w-full h-full object-cover"
									src="/assets/images/about-us-1.png"
								/>
							</div>
						</div>
					</div>
				</section>
			</Container>
			<TextContainer className="flex flex-col gap-[80px] mt-[180px]">
				<h1 className="text-center font-medium text-[40px]  mb-[40px]">How we work</h1>
				<article className="text-[24px] gap-[40px] flex flex-col">
					<p
						data-aos="fade-up"
						data-aos-duration="700"
					>
						Want the print in another colour? give us a call or send an email with the print name, SKU code and your preferred colour. Please note that we would only be able to change the background color.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
					>
						Prints are sold multiple times unless customer selects the exclusivity option at checkout, then prints are taken off the site immediately after purchase.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
					>
						If the exclusivity option is not available at checkout then it means print has been sold before and cannot be exclusive to your brand if you purchase it.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
					>
						If you are interested in having a print thats exclusive to just your brand and you are very precise about what colours and images go on your print, book an appointment with us online or give us a call. Please don’t hesitate to contact us if you have any questions!
					</p>
				</article>
			</TextContainer>
			<Container>
				<section className="mt-[153px] h-[1000px] grid grid-rows-[0.45fr_0.55fr] grid-cols-1 gap-[32px]">
					<div className="w-full h-[570px]">
						<img
							className="w-full h-full object-cover"
							src="/assets/images/about-us-1.png"
						/>
					</div>
					<div className="grid w-full h-[480px] gap-[30px] grid-cols-[1.16fr_0.84fr]">
						<div className="w-full h-[480px]">
							<img
								className="w-full h-full object-cover"
								src="/assets/images/about-us-1.png"
							/>
						</div>
						<div className="w-full h-full grid grid-cols-[1fr_1fr] gap-[30px]">
							<div className="w-full h-full">
								<img
									className="w-full h-full object-cover"
									src="/assets/images/about-us-1.png"
								/>
							</div>
							<div className="w-full h-full">
								<img
									className="w-full h-full object-cover"
									src="/assets/images/about-us-1.png"
								/>
							</div>
						</div>
					</div>
				</section>
			</Container>
			<Footer />
		</main>
	);
};

export default AboutUs;
