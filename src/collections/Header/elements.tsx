import styled, { css } from "styled-components";
import { HTMLHeaderProps } from "types";
import { Image as _Image, SearchInput as _SearchInput, Button as _Button } from "components";

export const Header = styled("header")<HTMLHeaderProps>(
  ({ theme: { colors } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
  `
);

export const HeaderContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    width: 100%;
    padding: 17px 50px;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${breakpoint.max.M} {
      padding: 10px 30px;

      display: flex;
      justify-content: space-between;
    }
  `
);

export const LogoAndInputsContainer = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    align-items: center;
    width: 100%;
    @media ${breakpoint.max.M} {
      justify-content: center;
      align-items: normal;
      display: none;
    }
  `
);

export const Image = styled(_Image)(() => css``);

export const ButtonDesktop = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const ButtonMobile = styled(_Button)(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    font-size: 14px;
    @media ${breakpoint.max.M} {
      display: block;

      padding: 11px 13px;
      line-height: 16px;
    }
  `
);

export const LogoWrapper = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    margin-right: 88px;

    @media ${breakpoint.max.M} {
      margin: 0;
    }
  `
);

export const SearchInput = styled(_SearchInput)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-right: 34px;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const ImageContainerDesktop = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    @media ${breakpoint.max.L} {
      display: none;
    }
  `
);

export const ImageContainerMobile = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.L} {
      display: block;
    }
  `
);

export const LogoWrapperMobile = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      display: block;
      margin-left: 30px;
    }
  `
);
