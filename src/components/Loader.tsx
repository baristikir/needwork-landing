import React from 'react';
import { motion, Variants } from 'framer-motion';

import Image from '../shared/Image';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

interface Props {
  setLoading: (state: boolean) => void;
}

const Loader = ({ setLoading }: Props) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock
          variants={item}
          width="500"
          posX="15"
          posY="62"
          id="image-1"
        />
        <div className="main-image-parent">
          <motion.img
            variants={item}
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            layoutId={'main-image-1'}
          />
        </div>
        <ImageBlock
          variants={item}
          width="500"
          posX="70"
          posY="10"
          id="image-3"
        />
        <ImageBlock
          variants={item}
          width="500"
          posX="60"
          posY="70"
          id="image-4"
        />
        <ImageBlock
          variants={item}
          width="400"
          posX="12"
          posY="12"
          id="image-5"
        />
      </motion.div>
    </motion.div>
  );
};

interface ImageProps {
  id: string;
  width: string;
  posX: string;
  posY: string;
  variants: Variants;
}
export const ImageBlock = ({ width, posX, posY, variants, id }: ImageProps) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block`}
      style={{
        width: `${width}px`,
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
      />
    </motion.div>
  );
};

export default Loader;
