export const SlideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: delay,
      },
    },
  };
};
export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        delay: delay,
      },
    },
  };
};
export const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        delay: delay,
      },
    },
  };
};

export const SlideDown = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
    },
  },
});
