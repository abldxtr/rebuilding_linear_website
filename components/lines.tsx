const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Lines() {
  const [lines, setLines] = useState([
    { id: 0, x1: 5, x2: 100, y1: 30, y2: 120 },
  ]); // Initial state with one line
  const [count, setCount] = useState(1); // Counter to generate unique keys

  // Function to generate random positions
  const getRandomPosition = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    // Function to add a new line
    const addLine = () => {
      const positionx1 = getRandomPosition(0, 30);
      const positionx2 = getRandomPosition(200, 600);
      const positiony1 = getRandomPosition(200, 500);

      const positiony2 = getRandomPosition(1, 20);

      setLines([
        {
          id: count,
          x1: positionx1,
          x2: positionx2,
          y1: positiony2,
          y2: positiony1,
        },
      ]);
      setCount(count + 1);
    };

    // Set an interval to add a new line every 2 seconds
    const interval = setInterval(addLine, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {lines.map((line, index) => (
        <AnimatePresence key={index}>
          <motion.div
            key={line.id}
            className="absolute w-[80px] rounded-full z-[1000] h-px animLine"
            initial={{
              x: line.x1,
              // y: line.y,
              opacity: 0.4,
            }}
            animate={{
              x: line.x2,
              opacity: [1, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.1,
              },
            }}
          />
        </AnimatePresence>
      ))}
      {lines.map((line) => (
        <AnimatePresence key={line.id + line.y1 * 2}>
          <motion.div
            key={line.id + line.y1}
            className="absolute w-px right-0 rounded-full z-[1000] h-[80px] animLineY"
            initial={{
              // y: line.y1,
              y: line.y2,
              opacity: 0.9,
            }}
            animate={{
              y: line.y1,
              opacity: [1, 0],
              transition: {
                duration: 2,
                // ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.1,
              },
            }}
          />
        </AnimatePresence>
      ))}
    </div>
  );
}
