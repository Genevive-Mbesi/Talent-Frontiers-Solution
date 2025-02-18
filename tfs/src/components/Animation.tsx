"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-2xl font-semibold text-center"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
