export const interactionAnimations = {
	whileHover: { scale: 1.08 },
	whileTap: { scale: 0.92 },
};

export const pageTransition = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.5 } },
	exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const defaultEase = [0.43, 0.13, 0.23, 0.96];

// Staggered Animation
export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export const child = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};
