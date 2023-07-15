import { UserProps, TableCardProps } from "collections/Card";
import * as S from "./elements";
import { useState, useEffect } from "react";
import { number } from "zod";
import { CompetitionPaginationProps } from "collections/Paginations";
import axios from "axios";

export interface UsersProps {
  users: UserProps[];
}

export interface CompetitionТableProps {
  tableCardProps: TableCardProps;
  competitionPaginationProps: CompetitionPaginationProps;
  rankColumnHead: string;
  nameColumnHead: string;
  scoreColumnHead: string;
  matchesColumnHead: string;
  profileColumnHead: string;
}

export const CompetitionТable = ({
  users,
  tableCardProps,
  competitionPaginationProps,
  matchesColumnHead,
  nameColumnHead,
  profileColumnHead,
  rankColumnHead,
  scoreColumnHead,
  ...props
}: CompetitionТableProps & UsersProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLastUser, setLastUser] = useState<number>(10);
  const [usersArrayToShow, setUsersArray] = useState<UserProps[]>();
  const [numberPages, setPages] = useState<number[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/users?data=${Math.ceil(currentLastUser / 10).toString()}`
        );
        setUsersArray(response.data.users);
        setPages(response.data.pages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [currentLastUser]);

  const pagesForLoading: number[] = [];
  if (loading) {
    for (let i = 1; i <= 10; i++) {
      pagesForLoading.push(i);
    }
  }

  const dummyUsers = users.slice(0, 10);

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
          {usersArrayToShow
            ? usersArrayToShow.map(user => (
                <S.TableCard {...user} {...tableCardProps} key={user.rank} />
              ))
            : dummyUsers.map(user => <S.TableCard {...user} {...tableCardProps} key={user.rank} />)}
        </S.Tablebody>
      </S.Competitiontable>
      {numberPages ? (
        <S.CompetitionPagination
          {...competitionPaginationProps}
          pages={numberPages}
          setCurrentLastUser={setLastUser}
          currentLastUser={currentLastUser}
        />
      ) : (
        <S.CompetitionPagination
          {...competitionPaginationProps}
          pages={pagesForLoading}
          variant='loading'
          setCurrentLastUser={setLastUser}
          currentLastUser={currentLastUser}
        />
      )}
    </S.Container>
  );
};
