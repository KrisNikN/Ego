import styled, { css } from "styled-components";
import { PowerCard as _PowerColumn } from "collections";
import { H2 as _H2 } from "components";

export const Power = styled.section(
  () => css`
    padding: 0 50px;
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
  `
);

export const PowerColumn = styled(_PowerColumn)(() => css``);
