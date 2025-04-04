import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const CountUp = ({ target = 2000, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionValue, target, {
      duration,
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      }
    });
    return controls.stop;
  }, [target, duration, motionValue]);

  return (
    <span className={`font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2 ${className}`}>
      {count}+
    </span>
  );
};

export default CountUp;
