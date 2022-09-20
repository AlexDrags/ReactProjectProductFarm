import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {
  StyledArticle,
  CardHeader,
  CardText,
  CardIcon,
  CardType
} from "./styles";


export default function Card({
  isNegative,
  title,
  feature,
  image,
  about,
  className
}) {
  return (
    <>
      <StyledArticle isNegative={isNegative}>
        <CardHeader>
          <CardIcon src={image} width={56} height={56} alt="eat" />
          <Title size={TitleSize.SMALL}>{title}</Title>
          <CardType isNegative={isNegative}>{feature}</CardType>
        </CardHeader>
        <CardText children={about} />
      </StyledArticle>
    </>
  );
}
