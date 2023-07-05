import { JoinFormProps } from "collections/Forms";
import * as S from "./elements";

export interface PowerCardProps {
  title: string;
  joinFormProps?: JoinFormProps;
  buttonText?: string;
}

export const PowerCard = ({
  title,
  buttonText: ButtonText,
  joinFormProps,
  ...props
}: PowerCardProps) => {
  return (
    <S.Column {...props}>
      <S.Title>{title}</S.Title>
      {joinFormProps ? <S.JoinForm {...joinFormProps} /> : <S.Button>{ButtonText}</S.Button>}
    </S.Column>
  );
};
