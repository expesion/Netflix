import React from "react";
import AccordianContainer from "../containers/accordian";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import { OptForm } from "../components";
function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email right now
          </OptForm.Text>
          <OptForm.Break />
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordianContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
