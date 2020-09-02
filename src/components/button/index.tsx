import * as React from "react";
import clsx from "clsx";

import "./style.sass";
import { useRipple } from "./hooks/useRipple";

interface Props {
  onClick?: (e: React.MouseEvent) => void;
  children?: string;
  label?: string;
  className?: string;
  rippleDelay?: number;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  label,
  className,
  rippleDelay = 600,
}) => {
  const { setPosition, position, isRippleVisible } = useRipple(rippleDelay);

  const classNames = clsx(["erokhin-ui-button", className]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

export default React.memo(Button);
