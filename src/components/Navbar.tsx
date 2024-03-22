"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

type Props = {};

const Navbar: React.FC<Props> = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className={`${styles.xPaddings} py-8 relative`}
		>
			<div className="absolute w-1/2 inset-0 gradient-01" />
			<div
				className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
			>
				<Image
					width={24}
					height={24}
					src="/search.svg"
					alt="Search"
					className="w-6 h-6 object-contain"
				/>
				<h2 className="font-extrabold text-2xl text-white">METAVERSUS</h2>
				<Image
					width={24}
					height={24}
					src="/menu.svg"
					className="w-6 h-6 object-contain"
					alt="Menu Icon"
				/>
			</div>
		</motion.nav>
	);
};

export default Navbar;
