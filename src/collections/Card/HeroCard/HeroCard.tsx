import * as S from "./elements";

export interface HeroCardProps {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const HeroCard = ({ images, ...props }: HeroCardProps) => {
  return (
    <S.Row {...props}>
      {images.map(image =>
        image.alt === "Dota2" ? (
          <S.ImageContainer>
            <S.Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              objectFit='cover'
              key={image.alt}
            />
          </S.ImageContainer>
        ) : (
          <S.Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout='intrinsic'
            key={image.alt}
          />
        )
      )}
    </S.Row>
  );
};
