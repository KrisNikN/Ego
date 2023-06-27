import { CompetitionProps } from "sections";
import { users } from "./users";

export const competitionProps: CompetitionProps = {
  rankedUsers: users,
  topthreeProps: {
    competitionName: "{Competition Name}",
    bronzeTrophieImage: {
      src: "/imgs/Trophies/bronze.png",
      alt: "bronze trophie",
      height: 31.77,
      width: 32
    },
    goldTrophieImage: {
      src: "/imgs/Trophies/gold.png",
      alt: "gold trophie",
      height: 31.77,
      width: 32
    },
    silverTrophieImage: {
      src: "/imgs/Trophies/silver.png",
      alt: "silver trophie",
      height: 31.77,
      width: 32
    }
  },
  statsleadersProps: {
    logoImage: { src: "/imgs/EgoLogo.png", width: 46, height: 46, alt: "logo" },
    title: "Inidivual Stats Leaders"
  },
  competitiontableProps: {
    tableCardProps: {
      logoImage: {
        src: "/imgs/EgoLogo.png",
        width: 46,
        height: 46,
        alt: "logo"
      }
    }
  }
};
