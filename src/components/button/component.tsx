import React from "react";
import clsx from "clsx";

import "./style.sass";

interface Props {
  onClick?: (e: React.MouseEvent) => void;
  children?: string;
  label?: string;
  className?: string;
  rippleDelay?: number;
}

export const useRipple = (delay: number) => {
  const [position, setPosition] = React.useState({ top: "", left: "" });
  const [isRippleVisible, setIsRippleVisible] = React.useState(false);

  React.useEffect(() => {
    setIsRippleVisible(true);
  }, [position]);

  React.useEffect(() => {
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

const Button = ({
  children,
  onClick,
  label,
  className,
  rippleDelay = 600,
}: Props) => {
  const { setPosition, position, isRippleVisible } = useRipple(rippleDelay);

  const classNames = clsx(["erokhin-ui-button", className]);

  const handleClickWithRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isRippleVisible) {
      const x = e.clientX - e.currentTarget.offsetLeft;
      const y = e.clientY - e.currentTarget.offsetTop;

      setPosition({ top: `${y}px`, left: `${x}px` });
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClickWithRipple} className={classNames}>
      {isRippleVisible && <span style={position}></span>}
      {label || children}
    </button>
  );
};

export default React.memo(Button);
