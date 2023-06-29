import styled, { css } from "styled-components";
import { PowerCard as _PowerColumn } from "collections";
import { H2 as _H2 } from "components";

export const Power = styled.section(
  ({ theme: { breakpoint } }) => css`
    padding: 0 50px;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;

    @media ${breakpoint.max.M} {
      flex-direction: column;
      margin: 0;
    }
  `
);

export const PowerColumn = styled(_PowerColumn)(() => css``);
