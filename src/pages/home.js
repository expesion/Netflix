import React from "react";
import AccordianContainer from "../containers/accordian";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
function Home() {
  return (
    <>
      <JumbotronContainer />
      <AccordianContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
