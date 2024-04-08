"use client";

import Slider from "react-slick";
import { BrandNewCard } from "../cards/BrandNewCard";
import { BrandNewData } from "@/constants";

export const BrandNewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-12">
      <Slider {...settings} autoplay>
        {BrandNewData.map((item) => (
          <BrandNewCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};
