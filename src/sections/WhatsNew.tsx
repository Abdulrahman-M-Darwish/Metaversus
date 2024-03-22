"use client";
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, planetVariants } from "@/utils/motion";
import { newFeatures } from "@/constants";
import { NewFeatures, StartSteps, TitleText, TypingText } from "@/components";
import Image from "next/image";

type Props = {};

const WhatsNew: React.FC<Props> = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col-reverse gap-8`}
			>
				<motion.div
					variants={fadeIn("right", "tween", 0.2, 1)}
					className="flex-[0.75] flex justify-center flex-col"
				>
					<TypingText title="| What's new?" />
					<TitleText title={"What's new about Metaversus"} />
					<div className="mt-12 flex flex-wrap justify-between gap-6">
						{newFeatures.map((feature) => (
							<NewFeatures key={feature.title} {...feature} />
						))}
					</div>
				</motion.div>
				<motion.div
					variants={planetVariants("right")}
					className={`flex-1 ${styles.flexCenter}`}
				>
					<Image
						width={500}
						height={500}
						src="/whats-new.png"
						alt="get-started"
						className="w-[90%] h-[90%] object-contain"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default WhatsNew;
