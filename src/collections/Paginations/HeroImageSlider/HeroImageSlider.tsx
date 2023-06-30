import { useState, useEffect } from "react";
import * as S from "./elements";
import { HeroCardProps } from "collections/Card";

interface HeroImageSliderProps {
  rows: HeroCardProps[];
}

interface SpecialProps {
  rowsContainerRef: React.RefObject<HTMLDivElement>;
}

export const HeroImageSlider = ({
  rows,
  rowsContainerRef
}: HeroImageSliderProps & SpecialProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lastActiveSlide, setlastActiveSlide] = useState(0);

  let images: number[] = [];

  for (const row of rows) {
    const rowImages = row.images;

    for (let i = 0; i < rowImages.length; i++) {
      images.push(i);
    }
  }

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  const scrollToPixels = (containerId: string, activeSlide: number) => {
    const container = document.getElementById(containerId);

    if (activeSlide === lastActiveSlide) {
      return;
    } else {
      if (activeSlide > lastActiveSlide) {
        const number = activeSlide - lastActiveSlide;

        if (container) {
          let pixelsToScroll = number * 355;
          container.scrollLeft += pixelsToScroll;
        }
      } else {
        const number = lastActiveSlide - activeSlide;

        if (container) {
          let pixelsToScroll = number * 355;
          container.scrollLeft -= pixelsToScroll;
        }
      }
      setlastActiveSlide(activeSlide);
    }
  };

  useEffect(() => {
    if (rowsContainerRef.current) {
      scrollToPixels(rowsContainerRef.current.id, activeSlide);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, rowsContainerRef]);

  return (
    <S.Container>
      {images.map(
        (image, index) =>
          index !== images.length - 1 && (
            <S.Slide
              active={activeSlide === index}
              key={index}
              onClick={() => handleDotClick(index)}
            ></S.Slide>
          )
      )}
    </S.Container>
  );
};
