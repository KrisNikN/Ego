import { useEffect, useState } from "react";
import * as S from "./elements";
import { useSession, signOut } from "next-auth/react";
import type { HTMLHeaderProps } from "types";
import { LoginProps, RegisterProps } from "collections/PopUps";
import { UserDropDownProps } from "collections/DropDowns";

export interface HeaderProps {
  discordLink: string;
  logoLink: string;
  dropDownImageUp: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  dropDownImageDown: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
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
  signInButtonText: string;
  signOutButtonText: string;
  loginPopupProps: LoginProps;
  registerPopupProps: RegisterProps;
  userDropDownProps: UserDropDownProps;
}

export const Header = ({
  dropDownImageDown,
  dropDownImageUp,
  loginPopupProps,
  registerPopupProps,
  discordLink,
  logoLink,
  discordImageMobile,
  discordImageDesktop,
  egoMainLogo,
  egoMainLogoMobile,
  searchInputPlaceholder,
  signOutButtonText,
  signInButtonText,
  userDropDownProps,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setOpenRegister(false);
      setOpenLogin(false);
    }
  }, [session]);

  const handleLoginClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setOpenLogin(true);
  };

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    await signOut();
  };

  const handleUserImageClick: React.MouseEventHandler<HTMLImageElement> = e => {
    e.preventDefault();
    if (openDropDown) {
      setOpenDropDown(false);
    } else {
      setOpenDropDown(true);
    }
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
            {session ? (
              openDropDown ? (
                <S.DropDownImageContainerUp>
                  <S.DropDownImage
                    src={dropDownImageUp.src}
                    width={dropDownImageUp.width}
                    height={dropDownImageUp.height}
                    alt={dropDownImageUp.alt}
                    layout='intrinsic'
                    onClick={handleUserImageClick}
                  />
                </S.DropDownImageContainerUp>
              ) : (
                <S.DropDownImageContainerDown>
                  <S.DropDownImage
                    src={dropDownImageDown.src}
                    width={dropDownImageDown.width}
                    height={dropDownImageDown.height}
                    alt={dropDownImageDown.alt}
                    layout='intrinsic'
                    onClick={handleUserImageClick}
                  />
                </S.DropDownImageContainerDown>
              )
            ) : (
              <S.ButtonDesktop variant='secondary' onClick={handleLoginClick}>
                {signInButtonText}
              </S.ButtonDesktop>
            )}
          </S.LogoAndInputsContainer>

          {session ? (
            openDropDown ? (
              <S.DropDownImageContainerUpMobile>
                <S.DropDownImage
                  src={dropDownImageUp.src}
                  width={dropDownImageUp.width}
                  height={dropDownImageUp.height}
                  alt={dropDownImageUp.alt}
                  layout='intrinsic'
                  onClick={handleUserImageClick}
                />
              </S.DropDownImageContainerUpMobile>
            ) : (
              <S.DropDownImageContainerDownMobile>
                <S.DropDownImage
                  src={dropDownImageDown.src}
                  width={dropDownImageDown.width}
                  height={dropDownImageDown.height}
                  alt={dropDownImageDown.alt}
                  layout='intrinsic'
                  onClick={handleUserImageClick}
                />
              </S.DropDownImageContainerDownMobile>
            )
          ) : (
            <S.ButtonMobile variant='secondary' onClick={handleLoginClick}>
              {signInButtonText}
            </S.ButtonMobile>
          )}
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
      <S.UserDropDown
        active={openDropDown}
        setOpenDropDown={setOpenDropDown}
        openDropDown={openDropDown}
        {...userDropDownProps}
      />
    </>
  );
};
