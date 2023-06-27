import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const CompetitionPagination = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
);

export const ArrowButton = styled.button(
  () => css`
    border: none;
    background: none;
    outline: none;

    padding: 0;
    padding: 0 40px;
    padding-bottom: 7px;
  `
);

export const Image = styled(_Image)(() => css``);
