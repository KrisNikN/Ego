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
  discord: css`
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.purple};

    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 73px;
    border-radius: 10px;

    &:hover {
      opacity: 0.7;
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
  `
};

export const Button = styled("button")<ButtonProps>`
  cursor: pointer;
  outline: none;
  border-radius: 5px;

  ${({ variant }) => buttonStyles[variant!]}
`;
