import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Text,
  Meta,
  Image,
  Item,
  SubTitle,
  Title,
  Entities,
  Content,
  Maturity,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
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
Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.title}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src={"/images/icons/close.png"} alt="close" />
        </FeatureClose>
      </Content>
      <Group margin="30ps 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>
          {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
        </Maturity>
        <FeatureText fontWeight="bold">
          {itemFeature.genre.charAt(0).toUpperCase() +
            itemFeature.genre.slice(1)}
        </FeatureText>
      </Group>
    </Feature>
  ) : null;
};
Card.Item = function CardSubItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      {...restProps}
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
    >
      {children}
    </Item>
  );
};
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
export default Card;
