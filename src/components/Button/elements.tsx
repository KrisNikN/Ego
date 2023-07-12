import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.gradients.buttonBackground};
    padding: 14px 34px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    padding: 11px 28px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.yellow};
    &:hover {
    }
  `,
  discord: css`
    cursor: pointer;
    outline: transparent;
    border: transparent;
    border-radius: 21px;
    width: 100%;
    height: 81px;
    background: url("/imgs/loginDiscord.png"), lightgray 50% / cover no-repeat;

    &:hover {
      opacity: 0.9;
    }
  `
};

export const Button = styled("button")<ButtonProps>`
  cursor: pointer;
  outline: none;
  border-radius: 5px;

  ${({ variant }) => buttonStyles[variant!]}
`;
