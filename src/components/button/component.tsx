import * as React from "react";

import { Props } from "./props";
import "./style.sass";

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="erokhin-ui-button">
      {children}
    </button>
  );
};

export default Button;
