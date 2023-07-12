import * as S from "./elements";
import { RegisterFormProps } from "collections/Forms";

export interface RegisterProps {
  formProps: RegisterFormProps;
  loginButtonText: string;
  title: string;
}

interface HooksProps {
  setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Register = ({
  setOpenRegister,
  setOpenLogin,
  loginButtonText,
  formProps,
  title
}: RegisterProps & HooksProps) => {
  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setOpenRegister(false);
  };

  const handleContainerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.key === "Enter") {
      handleContainerClick(e);
    }
  };

  const handleLoginButtonClick = () => {
    setOpenRegister(false);
    setOpenLogin(true);
  };

  return (
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
        <S.Title>{title}</S.Title>
        <S.RegisterForm {...formProps} />
        <S.Button onClick={handleLoginButtonClick}>{loginButtonText}</S.Button>
      </S.FormContainer>
    </S.Overlay>
  );
};
