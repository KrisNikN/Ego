import { HeaderProps } from "collections";
import { loginPopupProps } from "./loginPopupProps";
import { registerPopupProps } from "./registerPopupProps";
import { userDropDownProps } from "./userDropDownProps";

export const headerProps: HeaderProps = {
  discordLink: "https://discord.com/",
  logoLink: "/",
  dropDownImageDown: {
    alt: "drop Down Image",
    height: 46,
    src: "/imgs/dropDown-down.png",
    width: 74
  },
  dropDownImageUp: {
    alt: "drop Down Image",
    height: 46,
    src: "/imgs/dropDown-up.png",
    width: 78
  },
  discordImageDesktop: {
    src: "/imgs/DiscordLogo.png",
    alt: "Discord Logo",
    height: 46,
    width: 175
  },
  discordImageMobile: {
    src: "/imgs/DiscordLogoSmall.png",
    alt: "Discord Logo",
    height: 46,
    width: 40
  },
  egoMainLogo: {
    src: "/imgs/EgoLogoMain.png",
    alt: "Ego Logo Main",
    height: 46,
    width: 144
  },
  egoMainLogoMobile: {
    src: "/imgs/EgoLogoMobile.png",
    alt: "Ego Logo Main",
    height: 40,
    width: 123.333
  },
  searchInputPlaceholder: "Search...",
  signInButtonText: "SIGN IN",
  signOutButtonText: "SIGN OUT",
  loginPopupProps: loginPopupProps,
  registerPopupProps: registerPopupProps,
  userDropDownProps: userDropDownProps
};
