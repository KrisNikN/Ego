import * as S from "./elements";

export interface BlockCardProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title: string;
  paragraph: string;
}

export const BlockCard = ({ image, paragraph, title, ...props }: BlockCardProps) => {
  return (
    <S.BlockCard {...props}>
      <S.ImageContainer>
        <S.Image src={image.src} width={image.width} height={image.height} layout='intrinsic' />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.BlockCard>
  );
};
