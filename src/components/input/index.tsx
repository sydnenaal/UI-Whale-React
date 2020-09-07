import React, { memo, ChangeEvent, FocusEvent, useState } from "react";
import clsx from "clsx";

import "./style.sass";

interface Props {
  onChange?: (e: ChangeEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: string;
  label?: string;
  autofocus?: boolean;
}

function Input({
  className,
  onChange,
  onFocus,
  onBlur,
  fullWidth,
  label,
  type = "text",
  disabled = false,
  autofocus = false,
}: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const classNames = clsx(["whale-ui-input", className, { fullWidth }]);
  const labeledClassNames = clsx([
    "whale-ui-labeled-input",
    className,
    { fullWidth, focus: isFocused },
  ]);

  function handleBlur(e: FocusEvent): void {
    setIsFocused(false);

    if (onFocus) {
      onFocus(e);
    }
  }

  function handleFocus(e: FocusEvent): void {
    setIsFocused(true);

    if (onBlur) {
      onBlur(e);
    }
  }

  const component = (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      type={type}
      onChange={onChange}
      autoFocus={autofocus}
      className={classNames}
    />
  );

  const componentWithLabel = (
    <fieldset className={labeledClassNames}>
      <legend>{label}</legend>
      <input
        disabled={disabled}
        autoFocus={autofocus}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
    </fieldset>
  );

  return label ? componentWithLabel : component;
}

export default memo(Input);
