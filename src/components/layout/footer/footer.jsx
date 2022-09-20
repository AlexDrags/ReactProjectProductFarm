import React from "react";
import Logo from "/src/components/ui/logo/logo";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />
        <span className="footer__copyrigth">Создано 2021</span>
      </div>
    </footer>
  );
}
