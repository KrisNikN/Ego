import styled, { css } from "styled-components";
import { H2 as _H2, Image as _Image, Paragraph as _Paragraph, Button as _Button } from "components";

export const StatsLeaders = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
    padding-top: 30px;
    padding-bottom: 42px;

    background-color: ${colors.darkGray};
    border-radius: 10px;

    @media ${breakpoint.max.L} {
      padding: 0;
      padding-left: 10px;
      padding-top: 25px;
      padding-bottom: 21px;
    }

    @media ${breakpoint.max.M} {
      padding: 0;
      padding: 0 25px;
      padding-top: 30px;
      padding-bottom: 42px;
    }

    @media ${breakpoint.max.S} {
      padding: 0;
      padding-left: 10px;
      padding-top: 25px;
      padding-bottom: 21px;
    }
  `
);

export const Title = styled(_H2)(
  ({ theme: { colors } }) => css`
    color: ${colors.gold};
    font-size: 20px;
    font-family: Inter;
    font-weight: 600;
    line-height: 28px;
  `
);

export const Row = styled.div(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-child(1) {
    }

    @media ${breakpoint.max.L} {
      margin-top: 26px;
      &:nth-child(1) {
        margin-top: 30px;
      }
    }

    @media ${breakpoint.max.M} {
      margin-top: 52px;
    }

    @media ${breakpoint.max.S} {
      margin-top: 26px;
      &:nth-child(1) {
        margin-top: 30px;
      }
    }
  `
);

export const Stat = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 600;
    line-height: 24px;
    color: ${colors.white};
  `
);

export const Info = styled.div(
  ({ theme: { colors } }) => css`
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export const UsernameImage = styled.div(
  () => css`
    display: flex;
    align-items: center;
  `
);

export const Image = styled(_Image)(() => css``);

export const UsernameStatInfo = styled(_Paragraph)(
  ({ theme: { colors } }) => css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
    color: ${colors.white};
    margin-left: 13px;
  `
);

export const Button = styled(_Button)(
  ({ theme: { breakpoint } }) => css`
    @media ${breakpoint.max.L} {
      font-size: 14px;
    }
    @media ${breakpoint.max.M} {
      font-size: 16px;
    }
    @media ${breakpoint.max.S} {
      font-size: 14px;
    }
  `
);
