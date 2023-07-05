import styled, { css } from "styled-components";
import { Paragraph as _Paragraph, Button as _Button, Image as _Image } from "components";

export const Discord = styled.section(
  ({ theme: { colors, breakpoint } }) => css`
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
    width: 100%;
    max-width: 880px;
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 10px;
    background-color: ${colors.darkGray};
    padding: 87px 100px;
    display: flex;

    @media ${breakpoint.max.M} {
      flex-direction: column;
      margin-top: 0;
      padding: 40px 14px;
      align-items: center;
      margin-bottom: 60px;
    }
  `
);

export const Container = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    color: ${colors.white};
    font-size: 24px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;

    @media ${breakpoint.max.M} {
      text-align: center;
      font-size: 20px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
    }
  `
);

export const Button = styled(_Button)(
  ({ theme: { breakpoint } }) => css`
    margin-left: 85px;
    @media ${breakpoint.max.M} {
      width: 110.396px;
      height: 53px;
      margin-top: 20px;
      margin-left: 0;
    }
  `
);

export const Image = styled(_Image)(() => css``);
