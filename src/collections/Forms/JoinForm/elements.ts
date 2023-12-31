import styled, { css } from "styled-components";
import { Paragraph as _Paragraph, FormInput as _FormInput, Button as _Button } from "components";

export const JoinForm = styled.form(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    align-items: flex-start;
    width: 100%;

    @media ${breakpoint.max.L} {
      flex-direction: column;
      align-items: center;
    }
  `
);

export const InputContainer = styled.div(
  ({ theme: { breakpoint } }) => css`
    position: relative;
    top: -5px;
    display: flex;
    flex-direction: column;
    width: 232px;

    @media ${breakpoint.max.L} {
      top: 0;
      width: 70%;
    }

    @media ${breakpoint.max.S} {
      width: 100%;
    }
  `
);

export const InputLabel = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.white};
    font-size: 10px;
    font-family: Inter;
    line-height: 14px;
    position: relative;
    left: +5px;
  `
);

export const Button = styled(_Button)(
  ({ theme: { breakpoint } }) =>
    css`
      margin-left: 25px;

      @media ${breakpoint.max.L} {
        margin: 0;
        margin-top: 30px;
        width: 70%;
      }

      @media ${breakpoint.max.S} {
        width: 100%;
      }
    `
);

export const FormInput = styled(_FormInput)(() => css``) as typeof _FormInput;
