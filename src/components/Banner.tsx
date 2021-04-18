import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@heroicons/react/solid';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
      rotation: 0.02,
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
      <motion.div className="banner-bg" animate={{ rotate: 0.2 }} />
      <BannerRowTop title={'find-your'} />
      <BannerRowCenter title={'workspace'} playMarquee={playMarquee} />
      <BannerRowBottom title={'at-needwork!'} />
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
        {letter === '-' ? '   ' : letter}
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
      <div style={{ width: '60%' }} className="row-col">
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
        <div className="row-text-btn">
          <span className="row-message">
            We are specialised in finding the best workspace fitting for your
            use case based in your locals. Check out our new mobile app!
          </span>
          <a className="main-btn" style={{ marginTop: '2rem' }}>
            <ExternalLinkIcon
              width={24}
              height={24}
              style={{
                position: 'absolute',
                right: '0',
                marginRight: '4px',
                marginTop: '4px',
              }}
            />
            <span className="main-btn-text">Download App</span>
          </a>
          <div className="main-btn-box" />
        </div>
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
