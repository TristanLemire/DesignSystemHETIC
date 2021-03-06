import React from "react";
import styled from "styled-components";
import { space } from "../../styles/const";
import { responsiveFor } from "../../styles/mixins";

export const Text = (props) => {
  return <CustomTagStyled theme={props}>{props.children}</CustomTagStyled>;
};

const CustomTagStyled = styled.p`
  text-align: ${(props) => props.theme.centered && `center`};
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.type.fontSize};
  font-weight: ${(props) => props.theme.type.fontWeight};
  letter-spacing: ${(props) => props.theme.type.letterSpacing};
  line-height: ${(props) => props.theme.type.lineHeight};
  font-style: ${(props) => props.theme.type.fontStyle};
  border-bottom: ${(props) => props.theme.underline && `solid ${props.color}`};
  padding-bottom: ${(props) => props.theme.underline && space.xxxs};
  display: ${(props) => (props.theme.type.span ? "inline" : "block")};
  ${responsiveFor.mobile`
    font-size: ${(props) => props.theme.type.fontSizeMobile};
  `};
`;
