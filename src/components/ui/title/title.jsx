import React from "react";
import "./style.css";

export const TitleSize = {
  BIG: "big",
  MIDDLE: "middle",
  SMALL: "small"
};

export default function Title({ children, size }) {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
}
