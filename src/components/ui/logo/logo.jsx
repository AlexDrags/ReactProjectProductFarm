import React from "react";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { LogoWrapper, LogoText } from "./styles";
export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImg />
      <LogoText>Фермерские продукты</LogoText>
    </LogoWrapper>
  );
}
