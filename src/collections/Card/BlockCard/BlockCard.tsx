import * as S from "./elements";
import { extractDimensionsFromUrl } from "functions";

export interface BlockCardProps {
  image: {
    filename: string;
    alt: string;
  };
  title: string;
  paragraph: string;
}

export const BlockCard = ({ image, paragraph, title, ...props }: BlockCardProps) => {
  const imageProps = extractDimensionsFromUrl(image.filename);

  return (
    <S.BlockCard {...props}>
      <S.ImageContainer>
        <S.Image
          src={image.filename}
          width={imageProps.width}
          height={imageProps.height}
          layout='intrinsic'
        />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.BlockCard>
  );
};
