import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Image,
  Item,
  SubTitle,
  Title,
  Content,
} from "./styles/card";
export const FeatureContext = createContext();
function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

export default Card;
