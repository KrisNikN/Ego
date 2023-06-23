import styled, { css } from "styled-components";
import { Image as _Image } from "components";

export const Row = styled.div(
  () => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
);

export const Image = styled(_Image)(() => css``);

export const ImageContainer = styled.div(
  () => css`
    position: relative;
    top: -5px;
    margin-left: 9px;
    margin-right: 10px;
  `
);
