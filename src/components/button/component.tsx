import * as React from "react";
import clsx from "clsx";

import { Props } from "./props";
import "./style.sass";

const Button: React.FC<Props> = ({ children, onClick, label, className }) => {
  const [isRippleShow, setIsRippleShow] = React.useState<boolean>(false);
  const [x, setX] = React.useState<number>();
  const [y, setY] = React.useState<number>();

  const classNames = clsx(["erokhin-ui-button", className]);
  const ripplePosition = { top: `${y}px`, left: `${x}px` };

  const onClickWithRipple = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!isRippleShow) {
      setX(e.clientX - e.currentTarget.offsetLeft);
      setY(e.clientY - e.currentTarget.offsetTop);

      setIsRippleShow(true);
      setTimeout(() => setIsRippleShow(false), 600);
    }

    onClick && onClick(e);
  };

  return (
    <button onClick={onClickWithRipple} className={classNames}>
      {isRippleShow && <span style={ripplePosition}></span>}
      {label || children}
    </button>
  );
};

export default Button;
