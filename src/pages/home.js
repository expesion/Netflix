import React from "react";
import AccordianContainer from "../containers/accordian";
import FooterContainer from "../containers/footer";
import JumbotronContainer from "../containers/jumbotron";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components";
function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more,
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time
          </Feature.SubTitle>
        </Feature>
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
