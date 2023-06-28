import styled, { css } from "styled-components";
import { H2 as _H2 } from "components";
import { BlockCard as _BlockCard } from "collections";

export const HowItWorks = styled.section(
  () => css`
    padding: 50px;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
    margin-top: 63px;
  `
);

export const BlockCard = styled(_BlockCard)(() => css``);
