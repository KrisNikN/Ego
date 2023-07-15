import * as S from "./elements";
import { LoginFormProps } from "collections/Forms";
import { useSession, signIn, signOut } from "next-auth/react";

export interface LoginProps {
  paragraphText: string;
  registerButtonText: string;
  formProps: LoginFormProps;
}

interface HooksProps {
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login = ({
  setOpenLogin,
  setOpenRegister,
  formProps,
  paragraphText,
  registerButtonText
}: LoginProps & HooksProps) => {
  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpenLogin(false);
  };

  const handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === "Enter") {
      handleContainerClick(e);
    }
  };

  const handleRegisterClick = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  return (
    <>
      <S.Overlay
        onClick={handleContainerClick}
        onKeyDown={handleContainerKeyDown}
        role='button'
        tabIndex={0}
      >
        <S.FormContainer
          onClick={e => {
            e.stopPropagation();
          }}
          role='presentation'
        >
          <S.DiscordButton
            variant='discord'
            onClick={() => {
              signIn("discord");
            }}
          ></S.DiscordButton>
          <S.Paragraph>{paragraphText}</S.Paragraph>
          <S.LoginForm {...formProps} />
          <S.Button onClick={handleRegisterClick}>{registerButtonText}</S.Button>
        </S.FormContainer>
      </S.Overlay>
    </>
  );
};
