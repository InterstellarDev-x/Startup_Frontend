import { motion } from "framer-motion"
import React from "react";

interface CardComponentInterface {
  title: string;
  body: string;
  icon?: React.ReactNode;
}

const CardComponent = (props: CardComponentInterface) => {
  return (
    <div className="p-4 mx-6  rounded-xl  flex flex-col items-center text-center max-w-md mx-auto">
      {props.icon && (
        <div className="mb-4 text-4xl text-yellow-400">
          {props.icon}
        </div>
      )}
      <motion.h1
        className="font-SemiHeadLine text-xl mb-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, scale: 1.05 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {props.title}
      </motion.h1>
      <motion.p
        className="font-LineParagraph font-medium leading-7 text-base"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, scale: 1.05 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        {props.body}
      </motion.p>
    </div>
  );
};

export default CardComponent;