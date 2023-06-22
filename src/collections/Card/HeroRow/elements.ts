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
    max-width: 285px;
    width: 100%;
    height: 147px;
    top: -8px;
    margin-left: 15px;
    margin-right: 15px;
  `
);
