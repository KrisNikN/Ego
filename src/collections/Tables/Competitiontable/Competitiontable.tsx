import { UserProps, TableCardProps } from "collections/Card";
import * as S from "./elements";
import { useState, useEffect } from "react";

export interface UsersProps {
  users: UserProps[];
}

export interface CompetitiontableProps {
  tableCardProps: TableCardProps;
}

export const Competitiontable = ({
  users,
  tableCardProps,
  ...props
}: UsersProps & CompetitiontableProps) => {
  const [currentLastUser, setLastUser] = useState<number>(10);
  const [usersArrayToShow, setUsersArray] = useState<UserProps[]>(users.slice(0, 10));
  useEffect(() => {
    setUsersArray(users.slice(0, currentLastUser));
  }, [currentLastUser, users]);

  return (
    <S.Container>
      <S.Competitiontable {...props}>
        <S.Tablehead>
          <S.Tablerow>
            <S.Tableheading>RANK</S.Tableheading>
            <S.Tableheading>NAME</S.Tableheading>
            <S.Tableheading>SCORE</S.Tableheading>
            <S.Tableheading>MATCHES</S.Tableheading>
            <S.Tableheading>PROFILE</S.Tableheading>
          </S.Tablerow>
        </S.Tablehead>
        <S.Tablebody>
          {usersArrayToShow.map(user => (
            <S.TableCard {...user} {...tableCardProps} key={user.rank} />
          ))}
        </S.Tablebody>
      </S.Competitiontable>
      <S.CompetitionPagination />
    </S.Container>
  );
};
