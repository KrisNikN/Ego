import styled, { css } from "styled-components";
import { Image as _Image, H3 as _H3, Paragraph as _Paragraph } from "components";

export const BlockCard = styled.div(
  ({ theme: { colors } }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid ${colors.gold};
    padding: 0 20px;
    padding-top: 33px;
    padding-bottom: 37px;
    max-width: 320px;
    min-height: 238px;
  `
);

export const ImageContainer = styled.div(
  ({ theme: { colors } }) => css`
    position: relative;
    display: flex;
    top: -55px;
    width: 66%;
    justify-content: center;
    background-color: ${colors.main};
    margin: 0 auto;
  `
);

export const Image = styled(_Image)(() => css``);

export const Title = styled(_H3)(
  ({ theme: { colors } }) => css`
    font-size: 24px;
    font-family: Inter;
    font-weight: 600;
    line-height: 32px;
    color: ${colors.white};
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    font-size: 16px;
    font-family: Inter;
    line-height: 24px;
    color: ${colors.white};
    margin-top: 10px;
  `
);
