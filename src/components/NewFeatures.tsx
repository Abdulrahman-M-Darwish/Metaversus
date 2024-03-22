"use client";

import styles from "@/styles";
import Image from "next/image";

interface Props {
	imgUrl: string;
	title: string;
	subtitle: string;
}

const NewFeatures: React.FC<Props> = ({ imgUrl, subtitle, title }) => {
	return (
		<div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
			<div
				className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
			>
				<Image
					width={35}
					height={35}
					src={imgUrl}
					alt="icon"
					className="w-1/2 h-1/2 object-contain"
				/>
			</div>
			<h2 className="mt-[26px] font-bold text-2xl text-white">Title {title}</h2>
			<p className="flex-1 mt-4 font-normal text-lg text-[#B0B0B0] leading-8">
				{subtitle}
			</p>
		</div>
	);
};

export default NewFeatures;
