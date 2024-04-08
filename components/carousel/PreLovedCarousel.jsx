"use client";

import Slider from "react-slick";

import { PreLovedCard } from "../cards/PreLovedCard";
import { CarsListData } from "@/constants";

export const PreLovedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-12 p-4 lg:p-0">
      <Slider {...settings}>
        {CarsListData.slice(0, 6).map((item) => (
          <PreLovedCard key={item.id} mb item={item} />
        ))}
      </Slider>
    </div>
  );
};
