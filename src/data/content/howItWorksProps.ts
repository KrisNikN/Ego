import { HowItWorksProps } from "sections";

export const howItWorksProps: HowItWorksProps = {
  title: "How it works",
  cards: [
    {
      image: { src: "/imgs/Icons/TrophieIcon.png", alt: "Trophie Icon ", height: 44, width: 55 },
      paragraph: "Join Competitions or create your own. Invite friends to compete when it begins.",
      title: "1 - Compete"
    },
    {
      image: { src: "/imgs/Icons/StatisticIcon.png", alt: "Statistic Icon", height: 53, width: 52 },
      paragraph:
        "EGO Lounge only calculates scores during competitions; No need to play 16 hours a day!",
      title: "2 - Efficiency"
    },
    {
      image: { src: "/imgs/Icons/ControlerIcon.png", alt: "Controler Icon", height: 36, width: 50 },
      paragraph: "No matchmaking required. Just play and we track who is doing the best.",
      title: "3 - No Matchmaking"
    },
    {
      image: { src: "/imgs/Icons/DiscordIcon.png", alt: "Discord Icon", height: 44, width: 39 },
      paragraph: "Chill @ our Discord, whether you’re social or competitive.",
      title: "4 - Discord"
    }
  ]
};
