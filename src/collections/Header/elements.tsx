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
  ({ theme: { colors } }) => css`
    width: 100%;
    padding: 17px 50px;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export const LogoAndInputsContainer = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    align-items: center;
    width: 100%;
  `
);

export const Image = styled(_Image)(() => css``);

export const Button = styled(_Button)(() => css``);

export const LogoWrapper = styled.div(
  () => css`
    margin-right: 88px;
  `
);

export const SearchInput = styled(_SearchInput)(
  () => css`
    margin-right: 34px;
  `
);
