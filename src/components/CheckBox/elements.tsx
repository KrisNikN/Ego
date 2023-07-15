import styled, { css } from "styled-components";

export const CheckBox = styled.input<{ variant?: string }>(
  ({ theme: { colors }, variant }) => css`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    accent-color: ${colors.yellow};
    width: 15px;
    height: 15px;
    background-color: transparent;
    border: 2px solid ${colors.yellow};
    border-radius: 4px;
    cursor: pointer;

    ${(variant === "yellow" &&
      css`
        border-color: ${colors.yellow};
      `) ||
    (variant === "alert" &&
      css`
        border-color: ${colors.vividRed};
      `)}
    &:checked {
      background-color: ${colors.yellow};
      border-color: ${colors.yellow};
    }

    &::before {
      content: "";
      width: 16px;
      height: 16px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${colors.main};
      background-color: CanvasText;
      transform-origin: bottom left;
      clip-path: polygon(17% 54%, 28% 43%, 38% 54%, 70% 22%, 81% 33%, 38% 75%, 17% 54%);
    }
    &:checked::before {
      transform: scale(1);
    }

    display: grid;
    place-content: center;
  `
);
