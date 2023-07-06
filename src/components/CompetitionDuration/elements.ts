import styled, { css } from "styled-components";
import { H2 as _H2 } from "components/Typography";

export const CompetitionDuration = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0 auto;
    font-size: 34px;
    font-family: Inter;
    font-weight: 500;
    line-height: 44px;
    color: ${colors.white};

    margin-top: 60px;
    max-width: 1440px;
    text-align: center;
    padding: 0 30px;

    @media ${breakpoint.max.M} {
      font-size: 24px;
    }
  `
);
