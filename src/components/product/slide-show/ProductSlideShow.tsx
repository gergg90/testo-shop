"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export function ProductSlideShow({ images, title, className }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        // style={
        //   {
        //     "--swiper-navigation-color": "#fff",
        //     "--swiper-pagination-color": "#fff",
        //   } as React.CSSProperties
        // }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 10000,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              alt={title}
              src={`/products/${image}`}
              width={1024}
              height={800}
              className="rounded-md object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={300}
              height={300}
              className="rounded-md object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
