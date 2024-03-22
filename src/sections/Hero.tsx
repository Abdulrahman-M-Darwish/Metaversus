"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

type Props = {};

const Hero: React.FC<Props> = () => {
	return (
		<section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<div className="flex justify-center items-center flex-col relative z-10">
					<motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
						Metaverse
					</motion.h1>
					<motion.div
						variants={textVariant(1.3)}
						className="flex flex-row justify-center items-center"
					>
						<h2 className={styles.heroHeading}>Ma</h2>
						<div className={styles.heroDText} />
						<h2 className={styles.heroHeading}>Ness</h2>
					</motion.div>
				</div>
				<motion.div
					variants={slideIn("right", "twee n", 0.2, 1)}
					className="relative w-full md:-mt-5 -mt-3"
				>
					<div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-8" />
					<Image
						width={1920}
						height={500}
						src="/cover.png"
						alt="cover"
						className="w-full sm:h-[500px] h-80 object-cover rounded-tl-[140px] z-10 relative"
					/>
					<a href="#explore">
						<div className="w-full flex justify-end sm:-mt-14 pr-10 relative z-10">
							<Image
								width={160}
								height={160}
								src="/stamp.png"
								alt="stamp"
								className="sm:w-40 w-24 sm:h-40 h-24 object-contain"
							/>
						</div>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
