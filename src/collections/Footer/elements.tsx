import styled, { css } from "styled-components";
import { HTMLFooterProps } from "types";
import { Paragraph as _Paragraph, Link as _Link } from "components";

export const Footer = styled(({ ...props }: HTMLFooterProps) => <footer {...props} />)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.6);
`;

export const ContainerFooter = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: relative;
    width: 100%;
    max-width: 1440px;
    padding: 18px 50px;
    display: flex;
    justify-content: space-between;

    @media ${breakpoint.max.M} {
      padding: 15px 30px;
    }
  `
);

export const Link = styled(_Link)(
  ({ theme: { breakpoint } }) => css`
    @media ${breakpoint.max.S} {
      font-size: 10px;
    }
  `
);

export const Paragraph = styled(_Paragraph)(
  ({ theme: { colors, breakpoint } }) => css`
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    line-height: 24px;
    color: ${colors.white};

    @media ${breakpoint.max.S} {
      font-size: 10px;
    }
  `
);
