import { MouseEvent } from "react";

export interface Props {
  onClick?: (e: MouseEvent) => void;
  children?: string;
}