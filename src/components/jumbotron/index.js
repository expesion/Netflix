import React from "react";
import {
  Inner,
  Container,
  Title,
  Image,
  SubTitle,
  Item,
  Pane,
  Video,
  AnimationContainer,
} from "./styles/jumbotron";
function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Item>
      <Inner {...restProps} direction={direction}>
        {children}
      </Inner>
    </Item>
  );
}
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Video = function JumbotronImage({
  src,
  height,
  width,
  top,
  ...restProps
}) {
  return (
    <Video top={top} {...restProps}>
      <video
        id="our-story-card-video"
        height={height}
        width={width}
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    </Video>
  );
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.AnimationContainer = function JumbotronAnimationContainer({
  children,
  ...restProps
}) {
  return <AnimationContainer {...restProps}>{children}</AnimationContainer>;
};
export default Jumbotron;
