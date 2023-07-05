import styled, { css } from "styled-components";
import { Image as _Image } from "components/Image";

export const Input = styled.input(
  ({ theme: { colors, breakpoint } }) => css`
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 44px;

    outline: transparent;
    background: transparent;
    border: 1px solid ${colors.lightGray};
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    color: ${colors.white};
    font-size: 16px;
    width: 100%;

    &:-moz-placeholder {
      color: ${colors.lightGray};
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
    }
  `
);

export const InputWraper = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    width: 100%;
    max-width: 360px;
    @media ${breakpoint.max.M} {
    }
  `
);

export const Image = styled(_Image)(({ theme: { colors, breakpoint } }) => css``);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    left: 20px;
    top: 0;
    top: 13px;
  `
);
