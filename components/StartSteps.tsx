import styles from '@/styles';
import React from 'react';

type Props = {
  text: string;
  number: number;
};

const StartSteps: React.FC<Props> = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
      >
        <p className='font-bold text-xl text-white'>0{number}</p>
      </div>
      <p className='flex-1 ml-8 font-normal text-lg text-[#B0B0B0] leading-8'>
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
