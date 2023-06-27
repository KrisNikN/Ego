import styled, { css } from "styled-components";
import {
  Topthree as _Topthree,
  Statsleaders as _Statsleaders,
  Competitiontable as _Competitiontable
} from "collections";

export const Competition = styled.section(
  () => css`
    padding: 50px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
  `
);

export const CompetitionColumn = styled.div(
  () => css`
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
  `
);

export const DetailsContainer = styled.div(
  () => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `
);

export const Detail = styled.div(
  ({ theme: { colors } }) => css`
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
  `
);

export const Topthree = styled(_Topthree)(() => css``);

export const Statsleaders = styled(_Statsleaders)(() => css``);

export const Competitiontable = styled(_Competitiontable)(() => css``);
