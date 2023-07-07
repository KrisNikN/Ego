import * as S from "./elements";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { HeroCardProps } from "collections/Card";
import { extractDimensionsFromUrl } from "functions";

export interface SwiperProps {
  rows: HeroCardProps[];
}

export const Swiper = ({ rows }: SwiperProps) => {
  const breakpoints = {
    830: {
      slidesPerView: 2.4,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    760: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    732: {
      slidesPerView: 2.1,
      spaceBetween: 20
    },
    650: {
      slidesPerView: 1.9,
      spaceBetween: 20
    },
    620: {
      slidesPerView: 1.8,
      spaceBetween: 20
    },
    500: {
      slidesPerView: 1.6,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    }
  };

  return (
    <SwiperContainer
      modules={[Pagination]}
      spaceBetween={20}
      pagination={{ clickable: true }}
      slidesPerView={1.2}
      breakpoints={breakpoints}
    >
      {rows.map(row =>
        row.images.map(image => {
          const showImage = extractDimensionsFromUrl(image.filename);
          return (
            <SwiperSlide key={image.filename}>
              <S.ImageContainer>
                <S.Image
                  src={image.filename}
                  alt={image.alt}
                  width={showImage.width}
                  height={showImage.height}
                  layout='intrinsic'
                />
              </S.ImageContainer>
            </SwiperSlide>
          );
        })
      )}
    </SwiperContainer>
  );
};
