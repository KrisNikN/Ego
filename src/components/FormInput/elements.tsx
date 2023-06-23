import styled, { css } from "styled-components";

export const FormInput = styled.input<{ variant?: string }>(
  ({ theme: { colors, breakpoint }, variant }) => css`
    background: transparent;
    outline: transparent;
    width: 100%;
    max-width: 232px;
    border-radius: 5px;
    background: ${colors.darkGray};
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
    font-size: 1rem;
    color: ${colors.white};

    ${variant === "alert" &&
    css`
      color: ${colors.vividRed};
    `}
  `
);
