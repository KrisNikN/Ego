import styled, { css } from "styled-components";
import { default as NextLink } from "next/link";

export const Link = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gold};
    border-bottom: 2px solid ${colors.gold};

    &:hover {
      cursor: pointer;
    }
  `
);
