'use client';

import { InsightCard, TitleText, TypingText } from '@/components';
import { insights } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';

type Props = {};

const Insights: React.FC<Props> = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Insight' textStyles='text-center' />
        <TitleText title='Insight about Metaverse' textStyles='text-center' />
        <div className='mt-[50px] flex flex-col gap-8'>
          {insights.map((insight, i) => (
            <InsightCard key={'insight' + i} index={i} {...insight} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
