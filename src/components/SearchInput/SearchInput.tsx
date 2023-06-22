import * as S from "./elements";

export interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = ({ placeholder, ...props }: SearchInputProps) => {
  return (
    <S.InputWraper {...props}>
      <S.Input placeholder={placeholder} />
      <S.ImageContainer>
        <S.Image src='/imgs/Icons/SearchIcon.png' layout='intrinsic' width={14} height={14} />
      </S.ImageContainer>
    </S.InputWraper>
  );
};
