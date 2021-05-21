import React from "react";
import {
  Container,
  Button,
  Heading,
  Image,
  Input,
  Section,
  SubHeading,
} from "./style/addProfile";
export default function AddProfile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
AddProfile.Heading = function addProfileHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
AddProfile.SubHeading = function addProfileSubHeading({
  children,
  ...restProps
}) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};
AddProfile.Button = function addProfileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
AddProfile.Section = function addProfileSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
AddProfile.Image = function addProfileImage({ src, ...restProps }) {
  return (
    <Image
      src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}
      {...restProps}
    />
  );
};
AddProfile.Input = function addProfileInput({ ...restProps }) {
  return <Input {...restProps} />;
};
