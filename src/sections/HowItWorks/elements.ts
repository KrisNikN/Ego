import styled, { css } from "styled-components";
import { H2 as _H2 } from "components";
import { BlockCard as _BlockCard } from "collections";

export const HowItWorks = styled.section(
  ({ theme: { breakpoint } }) => css`
    padding: 50px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media ${breakpoint.max.M} {
      padding: 50px 30px;
      padding-bottom: 60px;
    }
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors } }) => css`
    font-size: 34px;
    font-family: Inter;
    font-weight: 600;
    line-height: 44px;
    color: ${colors.white};
    text-align: center;
  `
);

export const BlocksContainer = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: -10px;
  `
);

export const BlockCard = styled(_BlockCard)(
  ({ theme: { breakpoint } }) => css`
    /* margin-left: 20px; */
    margin: 10px;
    margin-top: 63px;

    @media ${breakpoint.max.M} {
      max-width: 354px;
      margin-top: 50px;
    }
  `
);
