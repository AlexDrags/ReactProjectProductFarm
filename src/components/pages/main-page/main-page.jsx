import React from "react";
import About from "/src/components/block/about/about";
import Advantages from "/src/components/block/advantages/advantages";
import "./style.css";

export default function MainPage({ advantages }) {
  return (
    <>
      <About />
      <Advantages advantages={advantages} />
    </>
  );
}
