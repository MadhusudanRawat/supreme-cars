"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";

const PreviousArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="w-9 h-9 p-2 bg-primary text-white absolute top-1/2 -translate-y-1/2 left-5 z-10"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
};

const NextArrow = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="w-9 h-9 p-2 bg-primary text-white absolute top-1/2 -translate-y-1/2 right-5 z-10"
    >
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export const Carousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    asNavFor: nav2,
    ref: (slider) => (sliderRef1 = slider),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  const settings2 = {
    asNavFor: nav1,
    ref: (slider) => (sliderRef2 = slider),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <Image
            src="/images/v-1-lg.webp"
            alt="view 1"
            width={1920}
            height={1065}
          />
          <Image
            src="/images/v-1-lg.webp"
            alt="view 2"
            width={1920}
            height={1065}
          />
          <Image
            src="/images/v-1-lg.webp"
            alt="view 3"
            width={1920}
            height={1065}
          />
          <Image
            src="/images/v-1-lg.webp"
            alt="view 4"
            width={1920}
            height={1065}
          />
        </Slider>
      </div>
      <div className="lg:p-6 bg-[#E1E1E1]">
        <Slider {...settings2}>
          <div className="p-1 lg:p-2">
            <Image
              id="item"
              src="/images/v-1.webp"
              alt="view 1"
              width={331}
              height={226}
            />
          </div>
          <div className="p-1 lg:p-2">
            <Image
              id="item"
              src="/images/v-2.webp"
              alt="view 2"
              width={331}
              height={226}
            />
          </div>
          <div className="p-1 lg:p-2">
            <Image
              id="item"
              src="/images/v-3.webp"
              alt="view 3"
              width={331}
              height={226}
            />
          </div>
          <div className="p-1 lg:p-2">
            <Image
              id="item"
              src="/images/v-4.webp"
              alt="view 4"
              width={331}
              height={226}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
