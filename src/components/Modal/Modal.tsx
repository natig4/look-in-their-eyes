"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./modal.module.css";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    rotate: 180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    rotate: 180,
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ModalClient = ({ page }: { page: number }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence mode='wait' onExitComplete={() => router.back()}>
      {isVisible && (
        <motion.div
          key='backdrop'
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ duration: 0.5 }}
          onClick={handleClose}
          className={styles.backdrop}
        >
          <motion.div
            key='modal'
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className={styles.modal}
          >
            <div className={styles.modalContent}>
              <h2>Details - {page}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                auctor, nisl eget ultricies tincidunt, nisi nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget
                ultricies tincidunt, nisi nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt,
                nisi nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                Donec auctor, nisl eget ultricies tincidunt, nisi nisl aliquam
                nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <p>
                Donec auctor, nisl eget ultricies tincidunt, nisi nisl aliquam
                nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl
                eget ultricies tincidunt, nisi nisl aliquam nisl, eget aliquam
                nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies
                tincidunt, nisi nisl aliquam nisl, eget aliquam nisl nisl sit
                amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisi
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <p>
                Donec auctor, nisl eget ultricies tincidunt, nisi nisl aliquam
                nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl
                eget ultricies tincidunt, nisi nisl aliquam nisl, eget aliquam
                nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies
                tincidunt, nisi nisl aliquam nisl, eget aliquam nisl nisl sit
                amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisi
                nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalClient;
