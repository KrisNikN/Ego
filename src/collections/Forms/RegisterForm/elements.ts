import styled, { css } from "styled-components";
import {
  FormInput as _FormInput,
  H2 as _H2,
  Button as _Button,
  Paragraph as _Paragraph,
  CheckBox as _CheckBox
} from "components";

export const FormContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
  `
);

export const Input = styled(_FormInput)(
  () => css`
    margin-top: 20px;
    &:nth-child(1) {
      margin-top: 0;
    }
  `
) as typeof _FormInput;

export const H2 = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    color: ${colors.yellow};
  `
);

export const Button = styled(_Button)(
  () => css`
    margin-top: 20px;
    width: 100%;
  `
);

export const ErrorP = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    margin-top: 20px;
    text-align: center;
  `
);

export const CheckBox = styled(_CheckBox)(() => css``) as typeof _CheckBox;

export const CheckBoxContainer = styled.div(
  () => css`
    margin-top: 20px;
    display: flex;
    align-items: center;
  `
);

export const CheckBoxText = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    margin-left: 10px;
    color: ${colors.white};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  `
);
