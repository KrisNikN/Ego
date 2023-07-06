import styled, { css } from "styled-components";
import {
  Topthree as _Topthree,
  StatsLeaders as _Statsleaders,
  CompetitionТable as _CompetitionТable
} from "collections";
import { H2 as _H2, CompetitionDuration as _CompetitionDuration } from "components";

export const Competition = styled.div(
  ({ theme: { breakpoint } }) => css`
    margin: 0 auto;
    padding: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1440px;

    @media ${breakpoint.max.M} {
      flex-direction: column-reverse;
      padding: 0 30px;
    }
  `
);

export const CompetitionWraper = styled.section(
  ({ theme: { breakpoint } }) => css`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
  `
);

export const CompetitionColumn = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:nth-child(1) {
      max-width: 524px;
    }
    &:nth-child(2) {
      max-width: 796px;
      margin-left: 20px;
    }

    @media ${breakpoint.max.L} {
      &:nth-child(2) {
        max-width: inherit;
        margin-left: 20px;
      }
      &:nth-child(1) {
        margin-left: 0;
        min-width: 327px;
      }
    }

    @media ${breakpoint.max.M} {
      max-width: unset;
      width: 100%;
      &:nth-child(2) {
        max-width: unset;
        margin-left: 0;
      }
      &:nth-child(1) {
        max-width: unset;
        margin-left: 0;
        min-width: unset;
      }
    }
  `
);

export const DetailsContainer = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: flex;
    width: 100%;
    @media ${breakpoint.max.L} {
      flex-direction: column;
    }
  `
);

export const Detail = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    width: 100%;
    max-width: 388px;
    padding: 20px 0;
    justify-content: center;
    background-color: ${colors.darkGray};
    border-radius: 5px;

    font-size: 20px;
    font-family: Inter;
    font-weight: 600;
    line-height: 28px;
    color: ${colors.white};

    &:nth-child(2) {
      margin-left: 20px;
    }

    @media ${breakpoint.max.L} {
      margin: 0;
      &:nth-child(2) {
        margin-left: 0;
        margin-top: 20px;
      }

      &:nth-child(2),
      :nth-child(1) {
        max-width: unset;
      }
    }

    @media ${breakpoint.max.S} {
      margin: 0;
      font-size: 16px;
    }
  `
);

export const TopthreeDesktop = styled(_Topthree)(
  ({ theme: { breakpoint } }) => css`
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const TopthreeMobile = styled(_Topthree)(
  ({ theme: { breakpoint } }) => css`
    margin-top: 20px;
    display: none;
    @media ${breakpoint.max.M} {
      display: block;
    }
  `
);

export const Statsleaders = styled(_Statsleaders)(() => css``);

export const CompetitionТable = styled(_CompetitionТable)(() => css``);

export const CompetitionDuration = styled(_CompetitionDuration)(() => css``);
