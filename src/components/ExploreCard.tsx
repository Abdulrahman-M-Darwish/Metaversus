"use client";
import React from "react";
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

type Props = {
	id: string;
	imgUrl: string;
	title: string;
	index: number;
	active: string;
	handleClick: React.Dispatch<React.SetStateAction<string>>;
};

const ExploreCard: React.FC<Props> = ({
	active,
	handleClick,
	id,
	imgUrl,
	index,
	title,
}) => {
	return (
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className={`relative ${
				active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
			} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
			onClick={() => handleClick(id)}
		>
			<Image
				src={imgUrl}
				alt={title}
				width={1200}
				height={800}
				className="absolute w-full h-full object-cover rounded-3xl"
			/>
			{active !== id ? (
				<h3 className="font-semibold sm:text-[26px] text-lg text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
					{title}
				</h3>
			) : (
				<div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-3xl">
					<div
						className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-4`}
					>
						<Image
							src="/headset.svg"
							alt="headset"
							width={24}
							height={24}
							className="w-1/2 object-contain"
						/>
					</div>
					<p className="text-white uppercase">Enter the Metaverse</p>
					<h2 className="mt-6 font-semibold sm:text-[32px] text-2xl text-white">
						{title}
					</h2>
				</div>
			)}
		</motion.div>
	);
};

export default ExploreCard;
