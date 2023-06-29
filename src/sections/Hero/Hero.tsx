import * as S from "./elements";
import { HeroCardProps } from "collections";

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
      <S.RowsContainer>
        {rows.map(row => (
          <S.HeroCard {...row} key={row.images[0].alt} />
        ))}
      </S.RowsContainer>
    </S.Hero>
  );
};
