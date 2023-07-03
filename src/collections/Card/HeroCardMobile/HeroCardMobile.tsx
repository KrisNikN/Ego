import { AdditionalProps, HeroCardProps } from "../HeroCard/HeroCard";
import * as S from "./elements";
import { SwiperSlide } from "swiper/react";

export const HeroCardMobile = ({ images, index, ...props }: HeroCardProps & AdditionalProps) => {
  return (
    <>
      {images.map((image, imageIndex) => {
        let imageId = `image-${imageIndex}`;
        if (index > 0) {
          imageId = `image-${imageIndex + 4}`;
        }

        return (
          <SwiperSlide>
            <S.ImageToContainer {...props} key={image.alt} id={imageId}>
              <S.Image
                src={image.src}
                alt={image.alt}
                objectFit='cover'
                width={image.width}
                height={image.height}
              />
            </S.ImageToContainer>
          </SwiperSlide>
        );
      })}
    </>
  );
};
