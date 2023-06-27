import styled, { css } from "styled-components";
import { Image as _Image } from "components";
import { TableCard as _TableCard } from "collections/Card";
import { CompetitionPagination as _CompetitionPagination } from "collections/Paginations";

export const Competitiontable = styled.table(
  ({ theme: { colors } }) => css`
    padding: 10px;
    font-size: 16px;
    font-family: Inter;
    line-height: 24px;
    border-collapse: collapse;
    width: 100%;

    thead tr {
      color: ${colors.white};
      font-weight: 600;
      border-bottom: 2px solid ${colors.gold};
    }
  `
);

export const Tablehead = styled.thead(() => css``);

export const Tablerow = styled.tr(
  ({ theme: { colors } }) => css`
    color: ${colors.white};
    &:nth-child(1) {
      color: ${colors.gold};
    }
    &:nth-child(2) {
      color: ${colors.silver};
    }
    &:nth-child(3) {
      color: ${colors.purplish};
    }
  `
);

export const Tableheading = styled.th(
  ({ theme: { colors } }) => css`
    padding: 0 40px;
    padding-top: 30px;
    padding-bottom: 25px;
    color: ${colors.white};
  `
);

export const Tablebody = styled.tbody(() => css``);

export const TableCard = styled(_TableCard)(() => css``);

export const CompetitionPagination = styled(_CompetitionPagination)(() => css``);

export const Container = styled.div(
  ({ theme: { colors } }) => css`
    width: 100%;
    margin-top: 20px;
    border-radius: 15px;
    background-color: ${colors.darkGray};
  `
);
