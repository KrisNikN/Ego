import styled, { css } from "styled-components";
import { HTMLHeaderProps } from "types";
import { Image as _Image, SearchInput as _SearchInput, Button as _Button } from "components";
import { Login as _Login, Register as _Register } from "collections/PopUps";
import { UserDropDown as _UserDropDown } from "collections/DropDowns";

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
    min-width: 137px;
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

export const LogoWrapper = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    margin-right: 88px;
    min-width: 144px;
    @media ${breakpoint.max.L} {
      margin-right: 58px;
    }
    @media ${breakpoint.max.M} {
      margin: 0;
    }
  `
);

export const SearchInput = styled(_SearchInput)(
  ({ theme: { colors, breakpoint } }) => css`
    margin-right: 34px;
    flex-shrink: 2;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const ImageContainerDesktop = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    margin-right: 150px;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const ImageContainerMobile = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;

    @media ${breakpoint.max.M} {
      display: block;
    }
  `
);

export const LogoWrapperMobile = styled.a(
  ({ theme: { colors, breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      display: block;
      margin-left: 30px;
    }
  `
);

export const DropDownImageContainerUp = styled.div(
  ({ theme: { breakpoint } }) => css`
    min-width: 78px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    left: +5px;

    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const DropDownImageContainerUpMobile = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      min-width: 78px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      left: +5px;
    }
  `
);

export const DropDownImageContainerDown = styled.div(
  ({ theme: { breakpoint } }) => css`
    min-width: 78px;
    display: flex;
    justify-content: flex-end;
    position: relative;
    left: +1px;
    @media ${breakpoint.max.M} {
      display: none;
    }
  `
);

export const DropDownImageContainerDownMobile = styled.div(
  ({ theme: { breakpoint } }) => css`
    display: none;
    @media ${breakpoint.max.M} {
      min-width: 78px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      left: +1px;
    }
  `
);

export const Login = styled(_Login)(() => css``);

export const Register = styled(_Register)(() => css``);

export const UserDropDown = styled(_UserDropDown)<{ active: boolean }>(
  ({ active }) => css`
    position: absolute;
    right: 40px;
    top: -100000px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s, transform 0.3s;

    /* Active state */
    ${active &&
    css`
      top: 115px;
      opacity: 1;
      transform: translateY(0);
    `}
  `
);

export const DropDownImage = styled(_Image)(() => css``);
