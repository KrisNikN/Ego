import styled, { css } from "styled-components";
import { Image as _Image } from "components";
import { HeroRow as _HeroRow } from "collections";

export const Hero = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
  `
);

export const Image = styled(_Image)(() => css``);

export const RowsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 40px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
  `
);

export const HeroRow = styled(_HeroRow)(() => css``);
