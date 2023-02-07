'use client';
import React from 'react';
import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';

interface props {
  title: React.ReactNode;
  textStyles?: string;
}

export const TypingText: React.FC<props> = ({ textStyles, title }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-sm text-secondary-white ${textStyles}`}
    >
      {Array.from(title as string).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText: React.FC<props> = ({ textStyles, title }) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial='hidden'
      whileInView='show'
      className={`mt-2 font-bold md:text-[60px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );
};
