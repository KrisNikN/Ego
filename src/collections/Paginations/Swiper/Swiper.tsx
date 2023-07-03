import * as S from "./elements";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { HeroCardProps } from "collections/Card";

export interface SwiperProps {
  rows: HeroCardProps[];
}

export const Swiper = ({ rows, ...props }: SwiperProps) => {
  const breakpoints = {
    732: {
      slidesPerView: 2.4,
      spaceBetween: 20
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
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
      onSwiper={swiper => console.log(swiper)}
      breakpoints={breakpoints}
    >
      {rows.map(row =>
        row.images.map(image => (
          <SwiperSlide key={image.alt}>
            <S.ImageToContainer>
              <S.Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                layout='intrinsic'
              />
            </S.ImageToContainer>
          </SwiperSlide>
        ))
      )}
    </SwiperContainer>
  );
};
