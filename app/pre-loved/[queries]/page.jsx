import Link from "next/link";

import { CircleArrowRight } from "lucide-react";

import { Sort } from "../Sort";
import { Filters } from "../Filters";

import { PreLovedCard } from "@/components/cards/PreLovedCard";
import { convertStringToObject } from "@/utils/convertStringToObject";
import { CarsListData } from "@/constants";

export const getData = async ({ string, counts }) => {
  const data = convertStringToObject(string);

  const response = CarsListData.filter((car) => {
    if (
      data.query &&
      !car.name.toLowerCase().includes(data.query.toLowerCase())
    ) {
      return false;
    }
    if (data.brand && car.brand.toLowerCase() !== data.brand.toLowerCase()) {
      return false;
    }
    if (data.priceFrom && car.price < parseInt(data.priceFrom)) {
      return false;
    }
    if (data.priceTo && car.price > parseInt(data.priceTo)) {
      return false;
    }
    if (data.year && car.registration !== parseInt(data.year)) {
      return false;
    }
    return true;
  });

  return response?.slice(0, counts);
};

const PreLovedQueries = async ({ params, searchParams }) => {
  const filterString = params?.queries
    ? decodeURIComponent(params?.queries)
    : "";

  const filteredData = await getData({
    string: filterString,
    counts: searchParams?.counts || 20,
  });

  return (
    <main>
      <section className="bg-pre-loved">
        <div className="container h-full">
          <div className="h-full flex flex-col items-end justify-end p-4">
            <h1 className="font-never-brat text-3xl lg:text-5xl lg:leading-[62px] text-white uppercase text-end mb-1">
              pre-loved cars
            </h1>
            <p className="text-xl lg:text-[32px] lg:leading-[39px] text-white text-end mb-6">
              Find your perfect match in our{" "}
              <span className="text-primary">Pre-Loved</span> car collection
            </p>
            <Link href="/pre-loved" className="button">
              Shop All <CircleArrowRight className="h-6 w-6 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 py-4 lg:py-12">
        <div className="max-w-[1223px] mx-auto w-full p-4">
          <Filters filterString={filterString} />
          <div className="flex flex-col gap-4 lg:gap-8 md:flex-row">
            <Sort filterString={filterString} />
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 justify-between xl:gap-8 mb-10">
                {filteredData?.length ? (
                  filteredData?.map((item) => (
                    <PreLovedCard
                      key={item?.id}
                      item={item}
                      width="w-full lg:w-[48%] xl:w-[405px]"
                    />
                  ))
                ) : (
                  <div className="h-[60vh] w-full p-5">
                    <p className="text-lg font-bold">No data found!</p>
                    <p className="text-sm text-neutral-500 font-medium">
                      There are no products available with the current filters
                    </p>
                  </div>
                )}
              </div>
              {filteredData?.length > 0 && (
                <div className="flex items-center justify-center">
                  <Link
                    href="/pre-loved/details/id"
                    className="button button-outline"
                  >
                    LOAD MORE
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreLovedQueries;
