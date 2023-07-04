import * as S from "./elements";

import type { HTMLHeaderProps } from "types";

export interface HeaderProps {
  discordLink: string;
  logoLink: string;
  discordImageDesktop: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  discordImageMobile: {
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
  egoMainLogoMobile: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  searchInputPlaceholder: string;
  signButtonText: string;
}

export const Header = ({
  discordLink,
  logoLink,
  discordImageMobile,
  discordImageDesktop,
  egoMainLogo,
  egoMainLogoMobile,
  searchInputPlaceholder,
  signButtonText,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.HeaderContainer>
        <S.ImageContainerDesktop href={discordLink} target='_blank'>
          <S.Image
            src={discordImageDesktop.src}
            width={discordImageDesktop.width}
            height={discordImageDesktop.height}
            alt={discordImageDesktop.alt}
            layout='intrinsic'
          />
        </S.ImageContainerDesktop>

        <S.ImageContainerMobile href={discordLink} target='_blank'>
          <S.Image
            src={discordImageMobile.src}
            width={discordImageMobile.width}
            height={discordImageMobile.height}
            alt={discordImageMobile.alt}
            layout='intrinsic'
          />
        </S.ImageContainerMobile>

        <S.LogoWrapperMobile href={logoLink}>
          <S.Image
            src={egoMainLogoMobile.src}
            width={egoMainLogoMobile.width}
            height={egoMainLogoMobile.height}
            alt={egoMainLogoMobile.alt}
            layout='intrinsic'
          />
        </S.LogoWrapperMobile>

        <S.LogoAndInputsContainer>
          <S.LogoWrapper href={logoLink}>
            <S.Image
              src={egoMainLogo.src}
              width={egoMainLogo.width}
              height={egoMainLogo.height}
              alt={egoMainLogo.alt}
              layout='intrinsic'
            />
          </S.LogoWrapper>
          <S.SearchInput placeholder={searchInputPlaceholder} />
          <S.ButtonDesktop variant='secondary'>{signButtonText}</S.ButtonDesktop>
        </S.LogoAndInputsContainer>

        <S.ButtonMobile variant='secondary'>{signButtonText}</S.ButtonMobile>
      </S.HeaderContainer>
    </S.Header>
  );
};
