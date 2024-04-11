"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { X, Search } from "lucide-react";
import { convertStringToObject } from "@/utils/convertStringToObject";
import { convertObjectToString } from "@/utils/convertObjectToString";

export const Filters = ({ filterString }) => {
  const router = useRouter();

  const [filters, setFilters] = useState(null);
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query?.trim() !== "") {
      const data = { ...filters, query };
      const string = convertObjectToString(data);

      router.push(`/pre-loved/${string}`);
    }
  };

  const handleRemoveFilter = (name) => {
    delete filters[name];

    const string = convertObjectToString(filters);
    router.push(`/pre-loved/${string}`);
  };

  useEffect(() => {
    const handleSaveFilters = () => {
      const data = filterString ? convertStringToObject(filterString) : null;
      setFilters(data);
    };

    handleSaveFilters();
  }, [filterString]);

  return (
    <div className="p-4 lg:p-8 rounded-[10px] bg-white mb-4 lg:mb-9">
      <h2 className="text-3xl lg:text-[32px] lg:leading-[39px] font-bold mb-3 lg:mb-5">
        Filter by
      </h2>
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-4">
        {filters ? (
          <div className="flex items-center gap-3">
            {filters?.brand && (
              <button
                type="button"
                onClick={() => handleRemoveFilter("brand")}
                className="px-4 py-2 bg-primary text-white inline-flex items-center gap-[10px] font-medium rounded-[5px]"
              >
                {filters?.brand} <X className="w-4 h-4" />
              </button>
            )}
            {filters?.priceFrom && (
              <button
                type="button"
                onClick={() => {
                  handleRemoveFilter("priceFrom");
                  handleRemoveFilter("priceTo");
                }}
                className="px-4 py-2 bg-primary text-white inline-flex items-center gap-[10px] font-medium rounded-[5px]"
              >
                ${filters?.priceFrom}-${filters?.priceTo}{" "}
                <X className="w-4 h-4" />
              </button>
            )}
            {filters?.year && (
              <button
                type="button"
                onClick={() => handleRemoveFilter("year")}
                className="px-4 py-2 bg-primary text-white inline-flex items-center gap-[10px] font-medium rounded-[5px]"
              >
                {filters?.year} <X className="w-4 h-4" />
              </button>
            )}
            {filters?.query && (
              <button
                type="button"
                onClick={() => handleRemoveFilter("query")}
                className="px-4 py-2 bg-primary text-white inline-flex items-center gap-[10px] font-medium rounded-[5px]"
              >
                {filters?.query} <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ) : (
          <p className="text-neutral-400 text-xl leading-6">
            Please select your Brand, Price and Registration Year below
          </p>
        )}
        <form
          onSubmit={handleFormSubmit}
          className="h-[50px] max-w-full lg:max-w-[480px] w-full overflow-hidden flex items-center"
        >
          <input
            type="search"
            name="query"
            id="preLovedFiltersQuery"
            placeholder="Search Brands, Price, Registration Year"
            value={filters?.query || query}
            onChange={(e) => setQuery(e.target.value)}
            className="placeholder:text-neutral-400 h-full font-medium border-2 leading-none flex-1 border-neutral-400 border-r-0 rounded-tl-[5px] rounded-bl-[5px] px-[22px] py-[12px]"
          />
          <button
            type="submit"
            className="w-[65px] h-[50px] overflow-hidden bg-primary text-white inline-flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
