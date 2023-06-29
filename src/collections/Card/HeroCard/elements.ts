import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Row = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;

    &:nth-child(2) {
      margin-top: 20px;
    }
  `
);

export const Image = styled(_Image)(
  () => css`
    width: 100%;
  `
);

export const ImageToContainer = styled.div(
  ({ theme: { colors, breakpoint, gradients } }) => css`
    position: relative;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${gradients.heroImage};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    margin-left: 20px;
    &:nth-child(1) {
      margin-left: 0;
    }
  `
);
