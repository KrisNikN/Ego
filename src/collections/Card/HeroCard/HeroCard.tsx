import * as S from "./elements";
import { extractDimensionsFromUrl } from "functions";

export interface HeroCardProps {
  images: {
    filename: string;
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
        const showImage = extractDimensionsFromUrl(image.filename);

        return (
          <S.ImageContainer key={image.filename}>
            <S.Image
              src={image.filename}
              alt={image.alt}
              objectFit='cover'
              width={showImage.width}
              height={showImage.height}
            />
          </S.ImageContainer>
        );
      })}
    </S.Row>
  );
};
