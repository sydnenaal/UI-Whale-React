import * as React from "react";

import "./style.sass";

export interface Props {
  onChange?: (e: React.ChangeEvent) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}

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
