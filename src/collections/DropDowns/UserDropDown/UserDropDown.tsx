import * as S from "./elements";
import { signOut, useSession } from "next-auth/react";
import { useRef, useEffect } from "react";

export interface UserDropDownProps {
  title: string;
  signOutButtonText: string;
  defaultUserImage: {
    src: string;
    alt: string;
  };
}

interface HooksProps {
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  openDropDown: boolean;
}

export const UserDropDown = ({
  setOpenDropDown,
  signOutButtonText,
  title,
  openDropDown,
  defaultUserImage,
  ...props
}: UserDropDownProps & HooksProps) => {
  const { data: session } = useSession();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (e.target instanceof Node && dropRef.current && !dropRef.current.contains(e.target)) {
        setOpenDropDown(false);
        console.log("false");
      }
    };

    if (openDropDown) {
      window.addEventListener("pointerup", handleClickOutside);
    }

    return () => {
      window.removeEventListener("pointerup", handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();
    await signOut();
  };

  return (
    <S.UserDropDown ref={dropRef} {...props}>
      <S.H2>{title}</S.H2>
      <S.ImageContainer>
        <S.Image
          src={session?.user?.image || defaultUserImage.src}
          width={64}
          height={64}
          layout='intrinsic'
          alt={defaultUserImage.alt}
        />
      </S.ImageContainer>
      <S.Paragraph>email: {session?.user?.email}</S.Paragraph>
      {session?.user?.name && <S.Paragraph>name: {session?.user?.name}</S.Paragraph>}
      <S.Button variant='primary' onClick={handleSignOut}>
        {signOutButtonText}
      </S.Button>
    </S.UserDropDown>
  );
};
