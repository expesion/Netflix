import React from "react";
import AccordianContainer from "../containers/accordian";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import HomeContainer from "../containers/header";
function Home() {
  return (
    <>
      <HomeContainer>
        <JumbotronContainer />
        <AccordianContainer />
        <FooterContainer />
      </HomeContainer>
    </>
  );
}

export default Home;
