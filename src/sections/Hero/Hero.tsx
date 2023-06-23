import * as S from "./elements";
import { HeroCardProps } from "collections";

export interface HeroProps {
  heroImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  rows: HeroCardProps[];
}

export const Hero = ({ heroImage, rows, ...props }: HeroProps) => {
  return (
    <S.Hero {...props}>
      <S.Image
        src={heroImage.src}
        alt={heroImage.alt}
        width={heroImage.width}
        height={heroImage.height}
        layout='intrinsic'
      />
      <S.RowsContainer>
        {rows.map(row => (
          <S.HeroRow {...row} key={row.images[0].alt} />
        ))}
      </S.RowsContainer>
    </S.Hero>
  );
};
