"use client";

import classNames from "classnames";
import {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
} from "./icone/icone";

import { motion, useInView } from "framer-motion";
import { CSSProperties, useRef } from "react";

export default function Animate() {
  const ref = useRef(null);

  const inView = useInView(ref, {});
  const center = [
    {
      size: 210,
      opacity: 0.3,
      delay: 0,
    },
    {
      size: 280,
      opacity: 0.2,
      delay: 0.4,
    },
    {
      size: 360,
      opacity: 0.15,
      delay: 0.8,
    },
  ];

  const items = [
    {
      icone: <First />,
      size: 40,
      x: 10,
      delay: 2,
    },
    {
      icone: <Second />,
      size: 56,
      x: 10,
      delay: 1,
    },
    {
      icone: <Third />,
      size: 72,
      x: 10,
      delay: 0,
    },
    {
      icone: <Fourth />,
      size: 148,
      x: 0,
      delay: 0,
    },
    {
      icone: <Fifth />,
      size: 72,
      x: -10,
      delay: 0,
    },
    {
      icone: <Sixth />,
      size: 56,
      x: -10,
      delay: 1,
    },
    {
      icone: <Seventh />,
      size: 40,
      x: -10,
      delay: 2,
    },
  ];
  // 500ms + var(--delay)

  let parent = {
    show: {
      transition: {
        delayChildren: 4,
      },
    },
  };
  let stat = {
    hidden: { opacity: 0, scale: 0.9 },
    show: (i: number) => ({
      opacity: [0, "var(--opacity)", "var(--opacity)", 0],
      scale: [0.9, 1, 1, 1],
      // x: ["-50%", "-50%", "-50%", "-50%"],
      // y: ["-50%", "-50%", "-50%", "-50%"],
      transition: {
        duration: 3.4,
        repeat: Infinity,
        delay: i + 0.5,

        times: [0, 0.4, 0.5, 1],
        ease: "easeInOut",
      },
    }),
    // exit: (i: number) => ({
    //   opacity: 0,
    //   scale: 1,
    //   transition: {
    //     duration: 4,

    //     delay: 1 / i,
    //     // duration: (1 / i) * 2,
    //   },
    // }),
    // transition: {
    //   // delayChildren: 4,
    //   repeatType: "mirror",
    // },
  };

  return (
    <div className="mt-20" ref={ref}>
      {inView && (
        <motion.div className="flex items-center justify-center w-full space-x-8">
          {items.map((item, index) => {
            const is3 = index === 3;

            return (
              <div key={index}>
                {is3 ? (
                  <motion.div
                    key={index}
                    className={classNames(
                      " rounded-full flex z-[1000] relative  items-center justify-center ",
                      " [&_svg:size-[var(--size)]] bg-blue-300 ",
                      // index === 3 && "relative",
                      // item.size,
                    )}
                    style={
                      {
                        "--size": item.size,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        // background-size: var(--size) var(--size);
                      } as CSSProperties
                    }
                    variants={parent}
                    initial="hidden"
                    animate="show"
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      times: [0, 0.4, 0.5, 1],
                      ease: "easeInOut",
                    }}
                  >
                    {item.icone}
                    {center.map((circle, index) => (
                      <motion.div
                        key={index}
                        style={
                          {
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            opacity: circle.opacity,
                            // animationDelay: `${circle.delay}s`,
                            "--opacity": circle.opacity,
                            "--delay": circle.delay,
                          } as CSSProperties
                        }
                        custom={circle.delay}
                        variants={stat}
                        initial="hidden"
                        exit="exit"
                        animate="show"
                        className={classNames(
                          "absolute border-[rgb(172,142,255)]",
                          " rounded-full border z-[1000] transition-opacity duration-[480ms] ",
                          // " bg-gradient-to-r from-[rgb(21,11,48)] to-[rgb(91,57,184)] ",
                          "animBack",
                          // item.size,
                          // item.opacity,
                        )}
                      ></motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={index}
                    style={
                      {
                        "--size": `${item.size}px`,
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                      } as CSSProperties
                    }
                    initial={{
                      x: item.x,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.4 + item.delay * 0.15,
                        // repeat: Infinity,
                      },
                    }}
                    className={classNames(
                      " rounded-full bgdata bg-no-repeat  ",
                      "[&_svg]:size-[calc(var(--size)_/_2)] [&_svg]:shrink-0 bg-[length:var(--size)_var(--size)] ",
                      " flex  items-center justify-center",
                      // index === 3 && "relative",
                      // item.size,
                    )}
                  >
                    {item.icone}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
