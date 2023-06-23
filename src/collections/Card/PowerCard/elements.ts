import styled, { css } from "styled-components";
import { JoinForm as _JoinForm } from "collections/Forms";
import { H2 as _H2, Button as _Button } from "components";

export const Column = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      border-left: 1px solid ${colors.lightGray};
      border-right: 1px solid ${colors.lightGray};
      padding: 0 32px;
    }
  `
);

export const JoinForm = styled(_JoinForm)(
  () => css`
    margin-top: 25px;
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors } }) => css`
    font-size: 34px;
    font-family: Inter;
    font-weight: 600;
    line-height: 44px;
    color: ${colors.white};
  `
);

export const Button = styled(_Button)(
  () =>
    css`
      margin-top: 36px;
    `
);
