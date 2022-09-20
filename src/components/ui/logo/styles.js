import styled from "styled-components";

export const LogoWrapper = styled.a`
  display: flex;
  min-height: 44px;
  align-items: center;
`;
export const LogoText = styled.span`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.colorText};
  margin-left: 30px;
`;
