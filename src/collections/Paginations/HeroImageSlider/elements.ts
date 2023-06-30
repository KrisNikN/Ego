import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    display: flex;
    margin-top: 20px;
  `
);

export const Slide = styled.button<{ active: boolean }>(
  ({ theme: { colors }, active }) => css`
    padding: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;

    margin-left: 20px;

    &:nth-child(1) {
      margin-left: 0;
    }

    background-color: #3f3f3f;

    ${active === true &&
    css`
      background-color: ${colors.gold};
    `}
  `
);
