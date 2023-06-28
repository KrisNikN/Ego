import * as S from "./elements";
import { useState } from "react";

export interface CompetitionPaginationProps {
  leftArrowImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  rightArrowImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HooksProps {
  currentLastUser: number;
  setCurrentLastUser: React.Dispatch<React.SetStateAction<number>>;
  pages: number[];
}

export const CompetitionPagination = ({
  currentLastUser,
  setCurrentLastUser,
  pages,
  leftArrowImage,
  rightArrowImage,
  ...props
}: CompetitionPaginationProps & HooksProps) => {
  const [pageNumberLimit, setPageNumberLimit] = useState<number>(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(1);

  const handlePageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setCurrentLastUser(Number(target.id) * 10);
  };

  const handleBackToStartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setCurrentLastUser(Number(target.id) * 10);
    setMaxPageNumberLimit(pageNumberLimit);
    setMinPageNumberLimit(1);
  };

  const handleToLastClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setCurrentLastUser(Number(target.id) * 10);
    setMaxPageNumberLimit(pages.length);
    if (pages.length <= 10) {
      if (pages.length > 8) {
        setMinPageNumberLimit(pages.length - 1);
      } else {
        setMinPageNumberLimit(5);
      }
    } else {
      const approximateLastPage = pages.length % 10;
      if (approximateLastPage > 8) {
        setMinPageNumberLimit(pages.length - 1);
      } else {
        setMinPageNumberLimit(5);
      }
    }
  };

  return (
    <S.CompetitionPagination {...props}>
      <S.ArrowButton
        onClick={() => {
          if (currentLastUser !== 10) {
            setCurrentLastUser(currentLastUser - 10);

            if (currentLastUser / 10 === minPageNumberLimit) {
              if (maxPageNumberLimit - (minPageNumberLimit % 2) !== 0) {
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
                setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit + 1);
              }
            }
          }
        }}
      >
        <S.Image
          src={leftArrowImage.src}
          width={leftArrowImage.width}
          height={leftArrowImage.height}
          layout='intrinsic'
          alt={leftArrowImage.alt}
        />
      </S.ArrowButton>
      {maxPageNumberLimit > pageNumberLimit && (
        <>
          <S.NumberButton id='1' onClick={handleBackToStartClick}>
            1
          </S.NumberButton>
          <S.NumberButton>...</S.NumberButton>
        </>
      )}
      {pages.map(page =>
        page <= maxPageNumberLimit && page >= minPageNumberLimit ? (
          <S.NumberButton onClick={handlePageButtonClick} id={page.toString()} key={page}>
            {page}
          </S.NumberButton>
        ) : null
      )}
      {maxPageNumberLimit !== pages.length && (
        <>
          <S.NumberButton>...</S.NumberButton>
          <S.NumberButton id={pages[pages.length - 1].toString()} onClick={handleToLastClick}>
            {pages[pages.length - 1]}
          </S.NumberButton>
        </>
      )}

      <S.ArrowButton
        onClick={() => {
          if (currentLastUser / 10 !== pages.length) {
            setCurrentLastUser(currentLastUser + 10);

            if (currentLastUser / 10 >= maxPageNumberLimit) {
              if (maxPageNumberLimit + pageNumberLimit > pages.length - 1) {
                setMaxPageNumberLimit(pages.length);
              } else {
                setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
              }
              setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
            }
          }
        }}
      >
        <S.Image
          src={rightArrowImage.src}
          width={rightArrowImage.width}
          height={rightArrowImage.height}
          layout='intrinsic'
          alt={rightArrowImage.alt}
        />
      </S.ArrowButton>
    </S.CompetitionPagination>
  );
};
