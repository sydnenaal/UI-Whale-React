import React, { MouseEvent, memo } from "react";
import clsx from "clsx";

import { useRipple } from "./hooks/useRipple";
import "./style.sass";

interface Props {
  onClick?: (e: MouseEvent) => void;
  children?: string;
  label?: string;
  className?: string;
  rippleDelay?: number;
}

const Button = ({
  children,
  onClick,
  label,
  className,
  rippleDelay = 600,
}: Props) => {
  const { setPosition, position, isRippleVisible } = useRipple(rippleDelay);

  const classNames = clsx(["erokhin-ui-button", className]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
    <button onClick={handleClick} className={classNames}>
      {isRippleVisible && <span style={position}></span>}
      {label || children}
    </button>
  );
};

export default memo(Button);
