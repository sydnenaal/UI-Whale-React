import React, { MouseEvent, memo } from "react";
import clsx from "clsx";

import { useRipple } from "./hooks/useRipple";
import "./style.sass";

type Size = "small" | "normal" | "big";
interface Props {
  onClick?: (e: MouseEvent) => void;
  children?: string;
  label?: string;
  className?: string;
  rippleDelay?: number;
  isLoading?: boolean;
  disabled?: boolean;
  compact?: boolean;
  circular?: boolean;
  fullWidth?: boolean;
  size?: Size;
}

function Button({
  children,
  onClick,
  label,
  className,
  rippleDelay = 600,
  isLoading = false,
  disabled = false,
  compact = false,
  circular = false,
  fullWidth = false,
  size = "normal",
}: Props) {
  const { setPosition, position, isRippleVisible } = useRipple(rippleDelay);

  const classNames = clsx([
    "whale-ui-button",
    size,
    className,
    { disabled, compact, circular, fullWidth, loading: isLoading },
  ]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (disabled || isLoading) {
      e.preventDefault();
      return;
    }

    if (!isRippleVisible) {
      const x = e.clientX - e.currentTarget.offsetLeft;
      const y = e.clientY - e.currentTarget.offsetTop;

      setPosition({ top: `${y}px`, left: `${x}px` });
    }

    if (onClick) {
      onClick(e);
    }
  }

  return (
    <button onClick={handleClick} className={classNames}>
      {isRippleVisible && <span style={position}></span>}
      {isLoading ? "Loading..." : label || children}
    </button>
  );
}

export default memo(Button);
