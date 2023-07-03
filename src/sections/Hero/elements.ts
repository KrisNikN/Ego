import styled, { css } from "styled-components";
import { Image as _Image } from "components";
import {
  HeroCard as _HeroCard,
  HeroImageSlider as _HeroImageSlider,
  HeroCardMobile as _HeroCardMobile,
  Swiper as _Swiper
} from "collections";

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

export const RowsContainerDesktop = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 40px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    @media ${breakpoint.max.M} {
      padding: 0;
      padding-left: 30px;
      display: flex;
      flex-direction: row;
      min-height: 185px;
      display: none;
    }
  `
);

export const RowsContainerMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 40px;
    width: 100%;
    padding-left: 30px;
    display: none;

    @media ${breakpoint.max.M} {
      padding: 0;
      padding-left: 30px;
      display: block;
      /* min-height: 185px; */
    }
  `
);

/*export const RowsContainerMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 40px;
    width: 100%;
    padding-left: 30px;
    display: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    @media ${breakpoint.max.M} {
      padding: 0;
      padding-left: 30px;
      display: flex;
      flex-direction: row;
      min-height: 185px;
    }
  `
); */

export const ContainerSlider = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    @media ${breakpoint.min.M} {
      display: none;
    }
  `
);

export const HeroCard = styled(_HeroCard)(() => css``);

export const HeroImageSlider = styled(_HeroImageSlider)(() => css``);

export const HeroCardMobile = styled(_HeroCardMobile)(() => css``);

export const Swiper = styled(_Swiper)(() => css``);
