import React from "react";
import {
  Inner,
  Container,
  Title,
  Image,
  SubTitle,
  Item,
  Pane,
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
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
export default Jumbotron;
