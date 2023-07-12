import { useZodForm } from "hooks";
import * as S from "./elements";
import { loginFormSchema } from "schemas";
// import { signIn, useSession } from 'next-auth/react';
import { useState } from "react";

export interface LoginFormProps {
  title: string;
  emailInputText: string;
  passwordInputText: string;
  buttonText: string;
  checkBoxText: string;
}

export const LoginForm = ({
  checkBoxText,
  title,
  emailInputText,
  buttonText,
  passwordInputText,
  ...props
}: LoginFormProps) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [nError, setError] = useState<string>("");
  const { control, handleSubmit } = useZodForm(loginFormSchema, {
    email: "",
    password: "",
    rememberMe: false
  });

  const submitHandler = handleSubmit(async ({ email, password }) => {
    // try {
    //   const user = await signIn('credentials', {
    //     email,
    //     password,
    //     action: 'login',
    //     redirect: false,
    //   });
    //   if (user?.error) {
    //     if (
    //       user?.error ===
    //       'FirebaseError: Firebase: Error (auth/wrong-password).'
    //     ) {
    //       throw new Error('Wrong password');
    //     } else if (
    //       user?.error ===
    //       'FirebaseError: Firebase: Error (auth/user-not-found).'
    //     ) {
    //       throw new Error("Such user doesn't exist ");
    //     }
    //     throw new Error('Authentication failed');
    //   }
    // } catch (error: any) {
    //   setHasError(true);
    //   setError(error.message);
    // }
  });

  return (
    <S.FormContainer {...props} onSubmit={submitHandler}>
      <S.Input control={control} name='email' type='email' placeholder={emailInputText} />
      <S.Input control={control} name='password' type='password' placeholder={passwordInputText} />
      <S.CheckBoxContainer>
        <S.CheckBox control={control} name='rememberMe' />
        <S.CheckBoxText>{checkBoxText}</S.CheckBoxText>
      </S.CheckBoxContainer>
      <S.Button variant='primary' type='submit'>
        {buttonText}
      </S.Button>
      {hasError && <S.ErrorP>{nError}</S.ErrorP>}
    </S.FormContainer>
  );
};
