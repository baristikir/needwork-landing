import React, { useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';

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
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
