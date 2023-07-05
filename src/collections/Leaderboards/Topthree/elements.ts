import styled, { css } from "styled-components";
import { H2 as _H2, Image as _Image, Paragraph as _Paragraph } from "components";

export const Topthree = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.darkGray};
    width: 100%;
    border-radius: 15px;
  `
);

export const CompetitionName = styled(_H2)(
  ({ theme: { colors } }) => css`
    font-size: 24px;
    font-family: Inter;
    font-weight: 600;
    line-height: 30px;

    color: ${colors.white};
    text-align: center;
    margin-top: 29px;
  `
);

export const ColumnsContainer = styled.div(
  () => css`
    margin-top: 24px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
  `
);

export const Column = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
);

export const Image = styled(_Image)(() => css``);

export const Pedestrial = styled.div<{ variant: "gold" | "silver" | "bronze" }>(
  ({ variant, theme: { gradients, colors } }) => css`
    width: 52px;
    border-radius: 5px 5px 0px 0px;
    margin-top: 10px;

    ${variant === "gold" &&
    css`
      height: 108px;
      background: ${gradients.yellowToGold};
    `}
    ${variant === "silver" &&
    css`
      height: 72px;
      background: ${gradients.silverToGray};
    `}
    ${variant === "bronze" &&
    css`
      height: 46px;
      background: ${gradients.purplishToBlack};
    `}
  `
);

export const Number = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    color: ${colors.white};
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 28px;
    margin-top: 11px;
    text-align: center;
  `
);

export const Name = styled.p<{ variant: "gold" | "silver" | "bronze" }>(
  ({ variant, theme: { gradients, colors } }) => css`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
    margin-top: 15px;
    margin-bottom: 22px;

    ${variant === "gold" &&
    css`
      color: ${colors.gold};
    `}

    ${variant === "silver" &&
    css`
      color: ${colors.silver};
    `}
  
      ${variant === "bronze" &&
    css`
      color: ${colors.purplish};
    `}
  `
);
