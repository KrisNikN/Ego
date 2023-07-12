import { HeaderProps } from "collections";
import { loginPopupProps } from "./loginPopupProps";
import { registerPopupProps } from "./registerPopupProps";

export const headerProps: HeaderProps = {
  discordLink: "https://discord.com/",
  logoLink: "/",
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
  signButtonText: "SIGN IN",
  loginPopupProps: loginPopupProps,
  registerPopupProps: registerPopupProps
};
