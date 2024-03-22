"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

type Props = {};

const About: React.FC<Props> = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<div className="gradient-02 z-0" />
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
			>
				<TypingText title="| About Metaversus" textStyles="text-center" />
				<motion.p
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="mt-2 font-normal sm:text-2xl text-xl text-center text-secondary-white"
				>
					<span className="font-extrabold text-white">Metaverse</span> is a new
					thing in the future, where you can enjoy the virtual world by feeling
					like {"it's"} really real, you can feel what you feel in this
					metaverse world, because this is really the{" "}
					<span className="font-extrabold text-white">
						madness of the metaverse
					</span>{" "}
					of today, using only{" "}
					<span className="font-extrabold text-white">VR</span> devices you can
					easily explore the metaverse world you want, turn your dreams into
					reality. {"Let's"} VR{" "}
					<span className="font-extrabold text-white">explore</span> the madness
					of the metaverse by scrolling down
				</motion.p>
				<motion.img
					src="/arrow-down.svg"
					alt="Arrow D own"
					className="w-4 h-7 object-contain mt-7"
					variants={fadeIn("up", "tween", 0.3, 1)}
				/>
			</motion.div>
		</section>
	);
};

export default About;
