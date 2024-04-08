"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { convertObjectToString } from "@/utils/convertObjectToString";
import { convertStringToObject } from "@/utils/convertStringToObject";

export const Sort = ({ filterString }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({});
  const [isRedirect, setIsRedirect] = useState(false);

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;

    setIsRedirect(true);
    if (value?.trim() === "" || value === 0) {
      delete filters[name];
    } else setFilters({ ...filters, [name]: value });
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
      </select>
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor="preLovedSortBrand"
          className="inline-block text-[15px] leading-[18px] font-medium"
        >
          Price:
        </label>
        {filters?.price > 0 && (
          <p className="text-sm font-bold text-primary">
            $0-${filters?.price * 1000}
          </p>
        )}
      </div>
      <input
        type="range"
        name="price"
        id="preLovedSortPrice"
        value={filters?.price || 0}
        onChange={handleOnInputChange}
        className="w-full accent-primary h-[5px] mb-1"
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
