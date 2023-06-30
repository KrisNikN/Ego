import * as S from "./elements";
import { HeroCardProps } from "collections";
import { useRef } from "react";

export interface HeroProps {
  heroImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  heroImageMobile: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  rows: HeroCardProps[];
}

export const Hero = ({ heroImage, heroImageMobile, rows, ...props }: HeroProps) => {
  const rowsContainerRef = useRef(null);

  return (
    <S.Hero {...props}>
      <S.ImageContainer>
        <S.Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          layout='intrinsic'
        />
      </S.ImageContainer>
      <S.ImageContainerMobile>
        <S.Image
          src={heroImageMobile.src}
          alt={heroImageMobile.alt}
          width={heroImageMobile.width}
          height={heroImageMobile.height}
          layout='intrinsic'
        />
      </S.ImageContainerMobile>
      <S.RowsContainerDesktop>
        {rows.map((row, index) => (
          <S.HeroCard index={index} {...row} key={row.images[0].alt} />
        ))}
      </S.RowsContainerDesktop>
      <S.RowsContainerMobile ref={rowsContainerRef} id='contacio'>
        {rows.map((row, index) => (
          <S.HeroCardMobile index={index} {...row} key={row.images[0].alt} />
        ))}
      </S.RowsContainerMobile>
      <S.ContainerSlider>
        <S.HeroImageSlider rows={rows} rowsContainerRef={rowsContainerRef} />
      </S.ContainerSlider>
    </S.Hero>
  );
};
