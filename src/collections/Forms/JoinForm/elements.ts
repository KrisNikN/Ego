import styled, { css } from "styled-components";
import { Paragraph as _Paragraph, FormInput as _FormInput, Button as _Button } from "components";

export const JoinForm = styled.form(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const InputContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 232px;
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
  () =>
    css`
      margin-left: 25px;
    `
);

export const FormInput = styled(_FormInput)(
  () => css`
    padding: 12px;
    border: none;
  `
) as typeof _FormInput;
