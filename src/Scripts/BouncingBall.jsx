import React from "react";
import { motion } from "framer-motion";

const ballStyle = {
  display: "block",
  height: "5rem",
  borderRadius: "0.5rem"
};

const bounceTransition = {
  x: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: .8
  }
};

export default function BouncingBall() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <motion.img
        src = 'https://cdn.discordapp.com/attachments/359558671824584715/717428562583486534/putinit2.png'
        style={ballStyle}
        transition={bounceTransition}
        animate={{
          x: ["46vw", "-48vw"],
          backgroundColor: ["#ff6699", "#6666ff"]
        }}
      />
    </div>
  );
}