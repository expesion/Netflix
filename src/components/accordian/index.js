import React, { createContext, useState, useContext } from "react";
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordian";
const ToggleContext = createContext();
function Accordian({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordian.Frame = function AccordianFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={(toggleShow, setToggleShow)}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordian.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((prevValue) => !prevValue)}
      {...restProps}
    >
      {children}
    </Header>
  );
};
Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleshow } = useContext(ToggleContext);
  return toggleshow && <Body {...restProps}>{children}</Body>;
};
export default Accordian;
