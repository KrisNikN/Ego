import styled, { css } from "styled-components";
import {
  H2 as _H2,
  Button as _Button,
  CheckBox as _CheckBox,
  Paragraph as _Paragraph
} from "components";
import { RegisterForm as _RegisterForm } from "collections/Forms";

export const Overlay = styled.div(
  () => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const RegisterForm = styled(_RegisterForm)(() => css``);

export const Button = styled(_Button)(
  () => css`
    width: 100%;
    margin-top: 20px;
  `
);

export const FormContainer = styled.form(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    z-index: 102;
    padding-top: 12px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;

    background-color: ${colors.main};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    max-width: 414px;
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.white};
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
  `
);
