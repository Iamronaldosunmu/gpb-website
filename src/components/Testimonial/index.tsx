interface TestimonialProps {
	name: string;
	position: string;
	url: string;
	testimonial: string;
}

const Testimonial = ({ name, position, url, testimonial }: TestimonialProps) => {
	return (
		<div
			data-aos="zoom-in"
			className="w-full px-[25px] py-[25px] shadow-[0_28px_61px_0_rgba(21,21,21,0.15)]"
		>
			<div className="flex justify-between">
				<div className="flex">
					<img src="/assets/images/star.svg" />
					<img src="/assets/images/star.svg" />
					<img src="/assets/images/star.svg" />
					<img src="/assets/images/star.svg" />
					<img src="/assets/images/star.svg" />
				</div>
				<img src="/assets/images/testimonial.svg" />
			</div>
			<p className="w-full mt-[27px]">{testimonial}</p>
			<div className="mt-[27px] flex items-center gap-[5px]">
				<img
					src={url}
					className="w-[38px] h-[38px] rounded-full overflow-hidden"
				/>
				<div className="flex flex-col">
					<p className="text-[14px] font-bold">{name}</p>
					<p className="text-[10px] relative bottom-[2px]">{position}</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
