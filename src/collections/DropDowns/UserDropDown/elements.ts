import styled, { css } from "styled-components";
import { Paragraph as _Paragraph, H2 as _H2, Button as _Button, Image as _Image } from "components";

export const UserDropDown = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 300px;
    padding: 20px;
    background-color: ${colors.main};
    display: flex;
    flex-direction: column;
    z-index: 10000;
    border-radius: 10px;
    align-items: center;
    border: 1px solid ${colors.bordersGray};
  `
);

export const H2 = styled(_H2)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    color: ${colors.yellow};
    border-bottom: 2px solid ${colors.yellow};
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.white};
    margin-top: 20px;
    margin-right: auto;
  `
);

export const Button = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 20px;
  `
);

export const ImageContainer = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `
);

export const Image = styled(_Image)(
  () => css`
    border-radius: 50%;
  `
);
