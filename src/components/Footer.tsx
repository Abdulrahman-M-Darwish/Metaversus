"use client";
import { socials } from "@/constants";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className={`${styles.paddings} py-8 relative`}
		>
			<div className="footer-gradient" />
			<div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
				<div className="flex items-center justify-between flex-wrap gap-5">
					<h2 className="font-bold md:text-[64px] text-[44px] text-white">
						Enter the Metaverse
					</h2>
					<button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-3">
						<Image
							width={24}
							height={24}
							src="/headset.svg"
							alt="headset"
							className="w-6 h-6 object-contain"
						/>
						<span className="font-normal text-base text-white">
							ENTER METAVERSE
						</span>
					</button>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="my-8 h-[2px] bg-white opacity-10"></div>
				<div className="flex items-center justify-between flex-wrap gap-4">
					<h3 className="font-extrabold text-2xl text-white">Metaversus</h3>
					<p className="font-normal text-sm text-white opacity-50">
						Copyright &copy; 2021 - 2022 Metaversus. All rights reserved.
					</p>
					<div className="flex gap-4">
						{socials.map((social) => (
							<Image
								width={24}
								height={24}
								key={social.name}
								src={social.url}
								alt={social.name}
								className="w-6 h-6 object-contain cursor-pointer"
							/>
						))}
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
