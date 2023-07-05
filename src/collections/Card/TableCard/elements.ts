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
  ({ theme: { breakpoint } }) => css`
    text-align: center;
    padding: 0;
    padding-top: 23px;

    @media ${breakpoint.max.L} {
      padding-top: 31.5px;
    }

    @media ${breakpoint.max.S} {
      padding-top: 23px;
    }
  `
);

export const TablecellImage = styled.td(
  ({ theme: { breakpoint } }) => css`
    text-align: center;
    padding: 0;
    padding-top: 23px;
    @media ${breakpoint.max.L} {
      display: none;
    }

    @media ${breakpoint.max.M} {
      display: block;
    }

    @media ${breakpoint.max.S} {
      display: none;
    }
  `
);
export const Image = styled(_Image)(() => css``);
