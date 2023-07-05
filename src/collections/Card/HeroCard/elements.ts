import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Row = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    overflow-x: visible;

    &:nth-child(2) {
      margin-top: 20px;
    }

    @media ${breakpoint.max.M} {
      &:nth-child(2) {
        margin-top: 0;
        margin-left: 20px;
      }
      min-height: 185px;
    }
  `
);

export const Image = styled(_Image)(({ theme: { gradients, colors } }) => css``);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint, gradients } }) => css`
    position: relative;
    z-index: 1;

    border-radius: 10px;
    scroll-snap-align: start;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      border-radius: 10px;
      left: 0;
      bottom: 4px;
      right: 0px;

      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      background: ${gradients.heroImage};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 2;
    }

    margin-left: 20px;
    &:nth-child(1) {
      margin-left: 0;
    }

    @media ${breakpoint.max.M} {
      min-width: 320px;
      min-height: 185px;
    }
  `
);
