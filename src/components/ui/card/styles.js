import styled from "styled-components";

export const StyledArticle = styled.article`
  width: 540px;
  min-height: 197px;
  text-align: left;
  padding: 20px;
  background-color: ${(props) =>
    props.isNegative ? props.theme.bgBad : props.theme.bgGood};
`;

export const CardHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  position: relative;
`;

export const CardText = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colorText};
  margin-bottom: 0;
  margin-top: 16px;
`;

export const CardType = styled.span`
  font-size: 14px;
  line-height: 21px;
  position: absolute;
  left: 76px;
  top: 0;
  padding: 2px 10px;
  width: 178px;
  height: 25px;
  color: #ffffff;
  background: ${(props) =>
    props.isNegative ? props.theme.featureGood : props.theme.featureBad};
`;

export const CardIcon = styled.img`
  margin-right: 20px;
`;
