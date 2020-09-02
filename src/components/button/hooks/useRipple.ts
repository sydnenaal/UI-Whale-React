import * as React from "react";

export const useRipple = (delay: number) => {
  const [position, setPosition] = React.useState<Object>();
  const [isRippleVisible, setIsRippleVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsRippleVisible(true);
  }, [position]);

  React.useEffect(() => {
    if (isRippleVisible) {
      setTimeout(() => {
        setIsRippleVisible(false);
      }, delay);
    }
  }, [isRippleVisible, delay]);

  return { setPosition, position, isRippleVisible };
};
