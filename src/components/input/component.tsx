import * as React from "react";

import { Props } from "./props";
import "./style.sass";

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  name,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="erokhin-ui-input"
    />
  );
};

export default Input;
