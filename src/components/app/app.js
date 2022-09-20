import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import GlobalStyles from "./styles";

import advatageList from "/src/mocks/advantagesList";
export default function App() {
  return (
    <>
      <GlobalStyles />
      <PageWrapper advantages={advatageList} />
    </>
  );
}
