import { PowerCardProps } from "collections";
import * as S from "./elements";

export interface PowerProps {
  columns: PowerCardProps[];
}

export const Power = ({ columns, ...props }: PowerProps) => {
  return (
    <S.Power {...props}>
      {columns.map(column => (
        <S.PowerColumn {...column} />
      ))}
    </S.Power>
  );
};
