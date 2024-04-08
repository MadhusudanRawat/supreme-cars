"use client";

import { ArrowLeft, ArrowRight, Facebook } from "lucide-react";

import Slider from "react-slick";

import { StaffCard } from "../cards/StaffCard";

const NextArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="absolute -top-14 right-2 z-10 p-2 bg-primary text-white"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};
const PreviousArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="absolute -top-14 right-14 z-10 p-2 bg-primary text-white"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};

export const StaffCarousel = () => {
  const settings = {
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="max-w-[800px] w-full mt-16">
      <Slider {...settings}>
        <StaffCard />
        <StaffCard />
        <StaffCard />
      </Slider>
    </div>
  );
};
