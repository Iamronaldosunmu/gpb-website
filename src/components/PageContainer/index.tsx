import { motion } from "framer-motion";
import { pageTransition } from "../../utils/framer-default-animations";
import React from "react";

type PageContainerProps = {
	className?: string;
	children: JSX.Element | JSX.Element[];
} & React.HTMLProps<HTMLDivElement>;
const PageContainer = ({ className, children, ...props }: PageContainerProps) => {
	return (
		<motion.main
			data-scroll-container
			className={className}
			{...pageTransition}
			{...props}
		>
			{children}
		</motion.main>
	);
};

export default PageContainer;
