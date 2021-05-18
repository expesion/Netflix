import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Background,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
} from "./style/header";
function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.Logo = function HeaderLogo({ to = "/", ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps}></Logo>
    </ReactRouterLink>
  );
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
export default Header;
