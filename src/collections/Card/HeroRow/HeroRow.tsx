import * as S from "./elements";

export interface HeroRowProps {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const HeroRow = ({ images, ...props }: HeroRowProps) => {
  return (
    <S.Row {...props}>
      {images.map(image =>
        image.alt === "Dota2" ? (
          <S.Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout='intrinsic'
            key={image.alt}
          />
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
