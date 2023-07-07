import { LinkProps } from "next/link";
import * as S from "./elements";
import type { HTMLFooterProps } from "types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export interface FooterProps {
  blok: ISbFooter;
}

export interface ISbFooter extends SbBlokData {
  copyRight: string;
  links: {
    text: string;
    link: {
      url: string;
    };
  }[];
}

export const Footer = ({ blok, ...props }: FooterProps & HTMLFooterProps) => {
  return (
    <S.Footer {...props} {...storyblokEditable(blok)}>
      <S.ContainerFooter>
        <S.Paragraph>{blok.copyRight}</S.Paragraph>

        {blok.links.map(connection => {
          return (
            <S.Link href={connection.link.url} key={connection.text}>
              {connection.text}
            </S.Link>
          );
        })}
      </S.ContainerFooter>
    </S.Footer>
  );
};
