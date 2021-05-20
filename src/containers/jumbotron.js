import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";
function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item, i) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.AnimationContainer>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            <Jumbotron.Video
              src={item.video}
              width={i === 2 ? "100%" : undefined}
              height={i === 2 ? "85%" : undefined}
              top={i === 2 ? "35%" : "46%"}
            />
          </Jumbotron.AnimationContainer>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
