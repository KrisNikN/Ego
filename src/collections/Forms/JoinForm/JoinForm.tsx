import { useZodForm } from "hooks";
import * as S from "./elements";
import { joinCompetitionSchema } from "schemas/joinCompetitionSchema";

export interface JoinFormProps {
  inputLabelText: string;
  formInputPlaceholder: string;
  submitButtonText: string;
}

export const JoinForm = ({
  formInputPlaceholder,
  inputLabelText,
  submitButtonText,
  ...props
}: JoinFormProps) => {
  const { control, handleSubmit } = useZodForm(joinCompetitionSchema, {
    code: ""
  });

  const submitHandler = handleSubmit(({ code }) => {
    console.log(code);
  });

  return (
    <S.JoinForm onSubmit={submitHandler} {...props}>
      <S.InputContainer>
        <S.InputLabel>{inputLabelText}</S.InputLabel>
        <S.FormInput
          control={control}
          type='text'
          name='code'
          variant=''
          placeholder={formInputPlaceholder}
        />
      </S.InputContainer>
      <S.Button type='submit'>{submitButtonText}</S.Button>
    </S.JoinForm>
  );
};
