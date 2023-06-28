import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Tablerow = styled.tr<{ rank: number }>(
  ({ theme: { colors }, rank }) => css`
    color: ${colors.white};

    ${rank === 1 &&
    css`
      color: ${colors.gold};
    `}
    ${rank === 2 &&
    css`
      color: ${colors.silver};
    `}
    ${rank === 3 &&
    css`
      color: ${colors.purplish};
    `}
  `
);

export const Tablecell = styled.td(
  () => css`
    text-align: center;
    padding: 0;
    padding-top: 23px;
  `
);

export const Image = styled(_Image)(() => css``);
