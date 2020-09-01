import { ChangeEvent } from "react";

export interface Props {
  onChange?: (e: ChangeEvent) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}
