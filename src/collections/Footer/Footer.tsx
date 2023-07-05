import { LinkProps } from "next/link";
import * as S from "./elements";
import type { HTMLFooterProps } from "types";

export interface FooterProps {
  paragraphText: string;
  termsPolicies: LinkProps & { text: string };
}

export const Footer = ({
  paragraphText,
  termsPolicies,
  ...props
}: FooterProps & HTMLFooterProps) => {
  return (
    <S.Footer {...props}>
      <S.ContainerFooter>
        <S.Paragraph>{paragraphText}</S.Paragraph>
        <S.Link href={termsPolicies.href}>{termsPolicies.text}</S.Link>
      </S.ContainerFooter>
    </S.Footer>
  );
};
