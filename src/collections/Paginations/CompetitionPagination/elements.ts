import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const CompetitionPagination = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  `
);

export const ArrowButton = styled.button(
  () => css`
    border: none;
    background: none;
    outline: none;
    display: flex;
    align-items: center;

    padding: 0;
    padding: 0 30px;

    cursor: pointer;
  `
);

export const Image = styled(_Image)(() => css``);

export const NumberButton = styled.button<{ checked?: boolean }>(
  ({ theme: { colors }, checked }) => css`
    color: ${colors.white};
    font-size: 16px;
    font-family: Inter;
    font-weight: 700;
    line-height: 24px;

    border: none;
    background: none;
    outline: none;

    padding: 0;
    margin: 0 10px;
    cursor: pointer;

    ${checked === true &&
    css`
      color: ${colors.gold};
      opacity: 0.8;
    `}
  `
);

export const Loader = styled.div(
  ({ theme: { colors } }) => css`
    border: 3px solid ${colors.lightGray}; /* Light grey */
    border-top: 3px solid ${colors.gold}; /* Blue */
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
);
