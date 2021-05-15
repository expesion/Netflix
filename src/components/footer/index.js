import React from "react";
import {
  Container,
  Break,
  Column,
  Link,
  Row,
  Text,
  Title,
} from "./styles/footer";

function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Link = function FooterRow({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

export default Footer;
