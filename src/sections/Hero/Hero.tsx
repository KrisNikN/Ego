import * as S from "./elements";
import { HeroCardProps } from "collections";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { extractDimensionsFromUrl } from "functions";

export interface HeroProps {
  blok: ISbHero;
}

export interface ISbHero extends SbBlokData {
  heroImage: {
    filename: string;
    alt: string;
  };
  heroImageMobile: {
    filename: string;
    alt: string;
  };
  rows: HeroCardProps[];
}

export const Hero = ({ blok, ...props }: HeroProps) => {
  const heroImage = extractDimensionsFromUrl(blok.heroImage?.filename);
  const heroImageMobile = extractDimensionsFromUrl(blok.heroImageMobile?.filename);

  return (
    <S.Hero {...props} {...storyblokEditable(blok)}>
      <S.ImageContainer>
        <S.Image
          src={blok.heroImage.filename}
          alt={blok.heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          layout='intrinsic'
          priority
        />
      </S.ImageContainer>
      <S.ImageContainerMobile>
        <S.Image
          src={blok.heroImageMobile.filename}
          alt={blok.heroImageMobile.alt}
          width={heroImageMobile.width}
          height={heroImageMobile.height}
          layout='intrinsic'
          priority
        />
      </S.ImageContainerMobile>
      <S.RowsContainerDesktop>
        {blok.rows.map((row, index) => (
          <S.HeroCard index={index} {...row} key={row.images[0].filename} />
        ))}
      </S.RowsContainerDesktop>

      <S.RowsContainerMobile>
        <S.Swiper rows={blok.rows} />
      </S.RowsContainerMobile>
    </S.Hero>
  );
};
