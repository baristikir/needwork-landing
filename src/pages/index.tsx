import React, { useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading');
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="main-image-parent final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={`./images/image-2.jpg`}
                  layoutId={'main-image-1'}
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
