export const interactionAnimations = {
	whileHover: { scale: 1.08 },
	whileTap: { scale: 0.92 },
};

export const pageTransition = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0 },
};

export const defaultEase = [0.43, 0.13, 0.23, 0.96];
