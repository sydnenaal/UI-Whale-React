import * as React from "react";
import clsx from "clsx";

import { Props } from "./props";
import "./style.sass";

const Button: React.FC<Props> = ({ children, onClick, label, className }) => {
  const classNames = clsx(["erokhin-ui-button", className]);

  return (
    <button onClick={onClick} className={classNames}>
      {label || children}
    </button>
  );
};

export default Button;
