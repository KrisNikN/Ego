import * as S from "./elements";

export interface HeroCardProps {
  images: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export interface AdditionalProps {
  index: number;
}

export const HeroCard = ({ images, index, ...props }: HeroCardProps & AdditionalProps) => {
  return (
    <S.Row {...props}>
      {images.map((image, imageIndex) => {
        let imageId: string = `slide-${imageIndex}`;

        if (index > 0) {
          imageId = `slide-${imageIndex + 4}`;
        }

        return (
          <S.ImageContainer key={image.alt} id={imageId}>
            <S.Image
              src={image.src}
              alt={image.alt}
              objectFit='cover'
              width={image.width}
              height={image.height}
            />
          </S.ImageContainer>
        );
      })}
    </S.Row>
  );
};
