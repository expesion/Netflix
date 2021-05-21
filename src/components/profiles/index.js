import React from "react";
import {
  Container,
  Item as User,
  List,
  Name,
  Picture,
  Title,
  Add,
  UserSelection,
} from "./style/profiles";
function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Profiles.List = function profileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profiles.Title = function profileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profiles.User = function profileUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};
Profiles.Name = function profileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profiles.Add = function profileAdd({ children, ...restProps }) {
  return <Add {...restProps}>{children}</Add>;
};

Profiles.UserSelection = function profileUserSelection({
  children,
  ...restProps
}) {
  return <UserSelection {...restProps}>{children}</UserSelection>;
};
Profiles.Picture = function profilePicture({ children, src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}
    />
  );
};
export default Profiles;
