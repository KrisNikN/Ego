import { useZodForm } from "hooks";
import * as S from "./elements";
import { registerFormSchema } from "schemas";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";

export interface RegisterFormProps {
  emailInputText: string;
  passwordInputText: string;
  confirmPasswordInputText: string;
  buttonText: string;
  checkBoxText: string;
}

export const RegisterForm = ({
  buttonText,
  confirmPasswordInputText,
  emailInputText,
  passwordInputText,
  checkBoxText,
  ...props
}: RegisterFormProps) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const { control, handleSubmit } = useZodForm(registerFormSchema, {
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password
      });

      if (response.status === 200) {
        await signIn("credentials", {
          email,
          password,
          redirect: false
        });
        setHasError(false);
      } else {
        setHasError(true);
      }
    } catch (error: any) {
      setHasError(true);
    }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
      <S.Input control={control} placeholder={emailInputText} name='email' type='email' />
      <S.Input control={control} placeholder={passwordInputText} name='password' type='password' />
      <S.Input
        control={control}
        placeholder={confirmPasswordInputText}
        name='confirmPassword'
        type='password'
      />
      <S.CheckBoxContainer>
        <S.CheckBox control={control} name='rememberMe' />
        <S.CheckBoxText>{checkBoxText}</S.CheckBoxText>
      </S.CheckBoxContainer>
      <S.Button variant='primary' type='submit'>
        {buttonText}
      </S.Button>
      {hasError && <S.ErrorP>User already exist</S.ErrorP>}
    </S.FormContainer>
  );
};
