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
      {images.map(image => (
        <S.ImageToContainer key={image.src}>
          <S.Image
            src={image.src}
            alt={image.alt}
            objectFit='cover'
            width={image.width}
            height={image.height}
          />
        </S.ImageToContainer>
      ))}
    </S.Row>
  );
};
