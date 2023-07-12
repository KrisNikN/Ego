import { useState } from "react";
import * as S from "./elements";

import type { HTMLHeaderProps } from "types";
import { LoginProps, RegisterProps } from "collections/PopUps";

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
  loginPopupProps: LoginProps;
  registerPopupProps: RegisterProps;
}

export const Header = ({
  loginPopupProps,
  registerPopupProps,
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
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleLoginClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setOpenLogin(true);
  };

  return (
    <>
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
            <S.ButtonDesktop variant='secondary' onClick={handleLoginClick}>
              {signButtonText}
            </S.ButtonDesktop>
          </S.LogoAndInputsContainer>

          <S.ButtonMobile variant='secondary' onClick={handleLoginClick}>
            {signButtonText}
          </S.ButtonMobile>
        </S.HeaderContainer>
      </S.Header>

      {openRegister && (
        <S.Register
          setOpenLogin={setOpenLogin}
          setOpenRegister={setOpenRegister}
          {...registerPopupProps}
        />
      )}
      {openLogin && (
        <S.Login
          setOpenRegister={setOpenRegister}
          setOpenLogin={setOpenLogin}
          {...loginPopupProps}
        />
      )}
    </>
  );
};
