import styled, { css } from "styled-components";
import { Image as _Image } from "components";
import { HeroCard as _HeroCard } from "collections";

export const Hero = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
  `
);

export const Image = styled(_Image)(
  ({ theme: { breakpoint } }) => css`
    @media ${breakpoint.max.S} {
      display: none;
    }
  `
);

export const ImageContainer = styled.div(
  ({ theme: { breakpoint } }) => css`
    @media ${breakpoint.max.S} {
      display: none;
    }
  `
);

export const ImageContainerMobile = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.S} {
      display: flex;
      justify-content: center;
    }
    width: 100%;
  `
);

export const RowsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 40px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
  `
);

export const HeroCard = styled(_HeroCard)(() => css``);
