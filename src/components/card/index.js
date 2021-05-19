import React from "react";
import {
  Container,
  Group,
  Image,
  Item,
  SubTitle,
  Title,
  Content,
} from "./styles/card";
function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Card;
