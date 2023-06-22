import * as S from "./elements";

import type { HTMLHeaderProps } from "types";

export interface HeaderProps {
  discordImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  egoMainLogo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  searchInputPlaceholder: string;
  signButtonText: string;
}

export const Header = ({
  discordImage,
  egoMainLogo,
  searchInputPlaceholder,
  signButtonText,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.Image
          src={discordImage.src}
          width={discordImage.width}
          height={discordImage.height}
          alt={discordImage.alt}
          layout='intrinsic'
        />
        <S.LogoAndInputsContainer>
          <S.LogoWrapper>
            <S.Image
              src={egoMainLogo.src}
              width={egoMainLogo.width}
              height={egoMainLogo.height}
              alt={egoMainLogo.alt}
              layout='intrinsic'
            />
          </S.LogoWrapper>
          <S.SearchInput placeholder={searchInputPlaceholder} />
          <S.Button variant='secondary'>{signButtonText}</S.Button>
        </S.LogoAndInputsContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};
