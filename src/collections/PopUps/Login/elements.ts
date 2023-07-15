import styled, { css } from "styled-components";
import { Button as _Button, Paragraph as _Paragraph } from "components";
import { LoginForm as _LoginForm } from "collections/Forms";

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

export const LoginForm = styled(_LoginForm)(
  () => css`
    width: 100%;
  `
);

export const Button = styled(_Button)(
  () => css`
    width: 100%;
    margin-top: 20px;
  `
);

export const FormContainer = styled.div(
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
    align-items: center;
    min-width: 350px;
    width: 100%;
    max-width: 414px;
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.white};
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  `
);

export const DiscordButton = styled(_Button)(
  () => css`
    margin-bottom: 13px;
  `
);

export const EmailResetDiv = styled.div(
  () => css`
    display: flex;
    width: 100%;
  `
);
