import styled, { css } from "styled-components";
import { JoinForm as _JoinForm } from "collections/Forms";
import { H2 as _H2, Button as _Button } from "components";

export const Column = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      border-left: 1px solid ${colors.bordersGray};
      border-right: 1px solid ${colors.bordersGray};
      padding: 0 32px;
    }

    @media ${breakpoint.max.L} {
      &:nth-child(2) {
        border: none;
        padding: 0;
      }
      &:nth-child(2),
      :nth-child(3) {
        h2 {
          border-top: 1px solid ${colors.bordersGray};
        }
      }

      margin-top: 30px;
    }
  `
);

export const JoinForm = styled(_JoinForm)(
  ({ theme: { breakpoint } }) => css`
    margin-top: 36px;

    /* @media ${breakpoint.max.L} {
      margin-top: 35px;
    } */
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 34px;
    font-family: Inter;
    font-weight: 600;
    line-height: 44px;
    color: ${colors.white};
    @media ${breakpoint.max.L} {
      font-size: 24px;
    }
    text-align: center;

    @media ${breakpoint.max.L} {
      padding-top: 30px;
    }
  `
);

export const Button = styled(_Button)(
  ({ theme: { breakpoint } }) =>
    css`
      margin-top: 36px;
      @media ${breakpoint.max.L} {
        width: 70%;
      }
      @media ${breakpoint.max.S} {
        width: 100%;
      }
    `
);
