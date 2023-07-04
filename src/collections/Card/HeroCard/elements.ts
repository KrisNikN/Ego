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

export const Image = styled(_Image)(
  () => css`
    width: 100%;
  `
);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint, gradients } }) => css`
    position: relative;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    scroll-snap-align: start;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      border-radius: 10px;
      left: 0;
      /* width: 100%;
      height: 100%; */
      right: 0;
      bottom: 2px;

      background: ${gradients.heroImage};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
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
