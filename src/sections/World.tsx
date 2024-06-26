"use client";
import { TitleText, TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const World: React.FC<Props> = () => {
	return (
		<section className={`${styles.paddings} relative z-10`}>
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title="| People on the World" textStyles="text-center" />
				<TitleText
					title="Track friends around you and invite them to play together in the same world"
					textStyles="text-center"
				/>
				<motion.div
					variants={fadeIn("up", "tween", 0.3, 1)}
					className="relative mt-16 flex w-full h-[550px]"
				>
					<Image
						width={1200}
						height={550}
						src="/map.png"
						alt="map"
						className="w-full h-full object-cover"
					/>
					<div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<Image
							width={70}
							height={70}
							src="/people-01.png"
							alt="people"
							className="w-full h-full"
						/>
					</div>
					<div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<Image
							width={70}
							height={70}
							src="/people-02.png"
							alt="people"
							className="w-full h-full"
						/>
					</div>
					<div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
						<Image
							width={70}
							height={70}
							src="/people-03.png"
							alt="people"
							className="w-full h-full"
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default World;
