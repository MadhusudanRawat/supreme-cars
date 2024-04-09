"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import RangeSlider from "react-range-slider-input";

import { convertObjectToString } from "@/utils/convertObjectToString";
import { convertStringToObject } from "@/utils/convertStringToObject";
import { CarsListData } from "@/constants";

export const Sort = ({ filterString }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({});
  const [isRedirect, setIsRedirect] = useState(false);

  const handleOnInputChange = (e) => {
    setIsRedirect(true);

    if (Array.isArray(e)) {
      if (e[0] === 0 && e[1] === 0) {
        delete filters["priceFrom"];
        delete filters["priceTo"];
      } else {
        setFilters({ ...filters, priceFrom: e[0], priceTo: e[1] });
      }
    } else {
      const { name, value } = e.target;

      if (value?.trim() === "") {
        delete filters[name];
      } else setFilters({ ...filters, [name]: value });
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isRedirect && filters) {
        const string = convertObjectToString(filters);
        router.push(`/pre-loved/${string}`);

        setIsRedirect(false);
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [filters, isRedirect, router]);

  useEffect(() => {
    const handleSaveFilters = () => {
      const data = filterString ? convertStringToObject(filterString) : {};
      setFilters(data);
    };

    handleSaveFilters();
  }, [filterString]);

  return (
    <div className="w-full md:w-1/2 h-max lg:w-[300px] xl:w-[316px] p-4 lgpy-9 lg:px-8 rounded-[10px] bg-white">
      <label
        htmlFor="preLovedSortBrand"
        className="inline-block text-[15px] leading-[18px] font-medium mb-2"
      >
        Brand:
      </label>
      <select
        name="brand"
        id="preLovedSortBrand"
        value={filters?.brand || ""}
        onChange={handleOnInputChange}
        className="border-2 border-neutral-400 rounded-[10px] h-[50px] px-4 py-2 text-neutral-400 font-medium leading-none w-full mb-[22px]"
      >
        <option value="">All</option>
        {CarsListData.filter(
          (item, index) => item?.brand !== CarsListData[index - 1]
        ).map((brand) => (
          <option key={brand.id} value={brand.brand}>
            {brand.brand}
          </option>
        ))}
      </select>
      <div className="flex items-center justify-between mb-3">
        <label
          htmlFor="preLovedSortBrand"
          className="inline-block text-[15px] leading-[18px] font-medium"
        >
          Price:
        </label>
        {parseInt(filters?.priceTo) > 0 && (
          <p className="text-sm font-bold text-primary">
            ${parseInt(filters?.priceFrom)}-$
            {parseInt(filters?.priceTo)}
          </p>
        )}
      </div>
      <RangeSlider
        id="preLovedSortPrice"
        min={0}
        max={1000000}
        step={1000}
        value={[filters?.priceFrom, filters?.priceTo] || [0, 0]}
        onInput={handleOnInputChange}
        className="w-full h-[5px] mb-3"
      />
      <div className="flex items-center justify-between mb-[22px]">
        <p className="text-xs leading-4">$0</p>
        <p className="text-xs leading-4">$1,000,000</p>
      </div>
      <label
        htmlFor="preLovedSortBrand"
        className="inline-block text-[15px] leading-[18px] font-medium mb-2"
      >
        Registration Year:
      </label>
      <select
        name="year"
        id="preLovedSortYear"
        value={filters?.year || ""}
        onChange={handleOnInputChange}
        className="border-2 border-neutral-400 rounded-[10px] h-[50px] px-4 py-2 text-neutral-400 font-medium leading-none w-full"
      >
        <option value="">All</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};
