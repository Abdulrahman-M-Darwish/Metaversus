"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
	imgUrl: string;
	title: string;
	subtitle: string;
	index: number;
}

const InsightCard: React.FC<Props> = ({ imgUrl, index, subtitle, title }) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.5, 1)}
			className="flex md:flex-row flex-col gap-4"
		>
			<Image
				width={500}
				height={500}
				src={imgUrl}
				alt={"planet-0" + index}
				className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
			/>
			<div className="w-full flex justify-between items-center">
				<div className="flex-1 md:ml-16 flex flex-col max-w-[650px]">
					<h3 className="mt-4 font-normal lg:text-[48px] text-[26px] text-white">
						{title}
					</h3>
					<p className="mt-4 font-normal lg:text-xl text-sm text-secondary-white">
						{subtitle}
					</p>
				</div>
				<div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border border-white">
					<Image
						width={100}
						height={100}
						src="/arrow.svg"
						alt="arrow"
						className="w-[40%] h-[40%] object-contain"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default InsightCard;
