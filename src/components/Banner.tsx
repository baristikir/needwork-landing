import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={'find \n your'} />
      <BannerRowCenter title={'workspace'} playMarquee={playMarquee} />
      <BannerRowBottom title={'now!'} />
    </motion.div>
  );
};

interface AnimatedLetterProps {
  title: string;
  disabled?: boolean;
}
const AnimatedLetters = ({ title, disabled = false }: AnimatedLetterProps) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : banner}
    initial="initial"
    animate="animate"
  >
    {/**@ts-ignore */}
    {[...title].map((letter): string => (
      <motion.span
        className="row-letter"
        variants={disabled ? undefined : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

interface BannerProps {
  title: string;
  playMarquee?: boolean;
}
const BannerRowTop = ({ title }: BannerProps) => {
  return (
    <div className={'banner-row'}>
      <div style={{ width: '70%' }} className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message">
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }: BannerProps) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }: BannerProps) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default Banner;
