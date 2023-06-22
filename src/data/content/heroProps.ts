import { HeroProps } from "sections";

export const heroProps: HeroProps = {
  heroImage: { src: "/imgs/GameApex.png", alt: "Game Apex image", height: 250, width: 1440 },
  rows: [
    {
      images: [
        { src: "/imgs/Games/HaldInfinity.png", alt: "Hald Infinity", height: 185, width: 320 },
        { src: "/imgs/Games/CsGo.png", alt: "Cs Go", height: 185, width: 320 },
        { src: "/imgs/Games/Fortnite.png", alt: "Fortnite", height: 185, width: 320 },
        {
          src: "/imgs/Games/LeagueOfLegends.png",
          alt: "League Of Legends",
          height: 185,
          width: 320
        }
      ]
    },
    {
      images: [
        { src: "/imgs/Games/PUBG.png", alt: "PUBG", height: 185, width: 320 },
        { src: "/imgs/Games/Dota Image (3).png", alt: "Dota2", height: 160, width: 277 },
        { src: "/imgs/Games/Valorant.png", alt: "Valorant", height: 185, width: 320 },
        { src: "/imgs/Games/CallOfDuty.png", alt: "Call Of Duty", height: 185, width: 320 }
      ]
    }
  ]
};
