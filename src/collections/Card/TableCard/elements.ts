import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Tablerow = styled.tr(
  ({ theme: { colors } }) => css`
    color: ${colors.white};
    &:nth-child(1) {
      color: ${colors.gold};
    }
    &:nth-child(2) {
      color: ${colors.silver};
    }
    &:nth-child(3) {
      color: ${colors.purplish};
    }
  `
);

export const Tablecell = styled.td(
  () => css`
    text-align: center;
    padding-top: 26px;
  `
);

export const Image = styled(_Image)(() => css``);
