import { UserProps, TableCardProps } from "collections/Card";
import * as S from "./elements";
import { useState, useEffect } from "react";
import { number } from "zod";
import { CompetitionPaginationProps } from "collections/Paginations";

export interface UsersProps {
  users: UserProps[];
}

export interface CompetitiontableProps {
  tableCardProps: TableCardProps;
  competitionPaginationProps: CompetitionPaginationProps;
  rankColumnHead: string;
  nameColumnHead: string;
  scoreColumnHead: string;
  matchesColumnHead: string;
  profileColumnHead: string;
}

export const Competitiontable = ({
  users,
  tableCardProps,
  competitionPaginationProps,
  matchesColumnHead,
  nameColumnHead,
  profileColumnHead,
  rankColumnHead,
  scoreColumnHead,
  ...props
}: UsersProps & CompetitiontableProps) => {
  const [currentLastUser, setLastUser] = useState<number>(10);
  const [usersArrayToShow, setUsersArray] = useState<UserProps[]>(users.slice(0, 10));
  useEffect(() => {
    setUsersArray(users.slice(currentLastUser - 10, currentLastUser));
  }, [currentLastUser, users]);

  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(users.length / 10); i++) {
    pages.push(i);
  }

  return (
    <S.Container>
      <S.Competitiontable {...props}>
        <S.Tablehead>
          <S.Tablerow>
            <S.Tableheading>{rankColumnHead}</S.Tableheading>
            <S.Tableheading>{nameColumnHead}</S.Tableheading>
            <S.Tableheading>{scoreColumnHead}</S.Tableheading>
            <S.Tableheading>{matchesColumnHead}</S.Tableheading>
            <S.TableheadingProfile>{profileColumnHead}</S.TableheadingProfile>
          </S.Tablerow>
        </S.Tablehead>
        <S.Tablebody>
          {usersArrayToShow.map(user => (
            <S.TableCard {...user} {...tableCardProps} key={user.rank} />
          ))}
        </S.Tablebody>
      </S.Competitiontable>
      <S.CompetitionPagination
        {...competitionPaginationProps}
        pages={pages}
        setCurrentLastUser={setLastUser}
        currentLastUser={currentLastUser}
      />
    </S.Container>
  );
};
