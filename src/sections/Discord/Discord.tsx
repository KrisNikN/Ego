import * as S from "./elements";

export interface DiscordProps {
  paragraph: string;
  discordImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const Discord = ({ discordImage, paragraph, ...props }: DiscordProps) => {
  return (
    <S.Container>
      <S.Discord>
        <S.Paragraph>{paragraph}</S.Paragraph>
        <S.Button variant='discord'>
          <S.Image
            src={discordImage.src}
            width={discordImage.width}
            height={discordImage.height}
            layout='intrinsic'
          />
        </S.Button>
      </S.Discord>
    </S.Container>
  );
};
