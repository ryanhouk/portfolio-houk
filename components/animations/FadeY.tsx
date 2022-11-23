import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props extends PropsWithChildren<any> {
  className?: string;
  once?: boolean;
  delay?: number;
}

const FadeY = ({ className, delay, once = false, children }: Props) => {
  return (
    <motion.div
      className={className}
      viewport={{ once }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        delay: delay,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeY;
