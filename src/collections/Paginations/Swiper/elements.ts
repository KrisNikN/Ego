import styled, { css } from "styled-components";
import { Image as _Image } from "components";
import { Swiper as _Swiper, SwiperSlide as _SwiperSlide } from "swiper/react";
import { HeroCardMobile as _HeroCardMobile } from "collections/Card";

export const HeroCardMobile = styled(_HeroCardMobile)(() => css``);

export const Image = styled(_Image)(
  () => css`
    width: 100%;
  `
);

export const ImageToContainer = styled.div(
  ({ theme: { colors, breakpoint, gradients } }) => css`
    position: relative;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
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
      max-width: 320px;
      max-height: 185px;
    }
  `
);

export const Swiper = styled(_Swiper)(() => css``);

export const SwiperSlide = styled(_SwiperSlide)(() => css``);
