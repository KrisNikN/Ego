import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Image = styled(_Image)(
  () => css`
    width: 100%;
  `
);

export const ImageContainer = styled.div(
  ({ theme: { colors, breakpoint, gradients } }) => css`
    position: relative;

    border-radius: 10px;
    scroll-snap-align: unset;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      border-radius: 10px;
      left: 0;
      /* width: 100%;
        height: 100%; */
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
      right: 0;
      bottom: 0;

      background: ${gradients.heroImage};
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      @media (max-width: 419px) {
        bottom: 4px;
      }
    }

    margin-left: 20px;
    &:nth-child(1) {
      margin-left: 0;
    }

    @media ${breakpoint.max.M} {
      max-width: 320px;
      max-height: 185px;
    }
  `
);
