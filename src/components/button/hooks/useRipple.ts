import { useEffect, useState } from "react";

export const useRipple = (delay: number) => {
  const [position, setPosition] = useState({ top: "", left: "" });
  const [isRippleVisible, setIsRippleVisible] = useState(false);

  useEffect(() => {
    setIsRippleVisible(true);
  }, [position]);

  useEffect(() => {
    if (isRippleVisible) {
      const interval = setTimeout(() => {
        setIsRippleVisible(false);
      }, delay);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isRippleVisible, delay]);

  return { setPosition, position, isRippleVisible };
};
