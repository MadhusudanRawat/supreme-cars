import Link from "next/link";

import { CircleArrowRight } from "lucide-react";

import { PreLovedCard } from "@/components/cards/PreLovedCard";
import { Sort } from "./Sort";
import { Filters } from "./Filters";
import { CarsListData } from "@/constants";

export const metadata = {
  title: "Pre Loved",
  description: "Supreme Cars | Powered by Sgcarmart",
};

const fetchCarList = ({ counts }) => {
  const list = CarsListData.slice(0, counts);
  return list;
};

const PreLoved = ({ searchParams }) => {
  const carsList = fetchCarList({ counts: searchParams.counts || 20 });

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
          <Filters />
          <div className="flex flex-col gap-4 lg:gap-8 md:flex-row">
            <Sort />
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 justify-between xl:gap-8 mb-10">
                {carsList.map((item) => (
                  <PreLovedCard
                    key={item.id}
                    item={item}
                    width="w-full lg:w-[48%] xl:w-[405px]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href={`/pre-loved?counts=${
                    parseInt(searchParams?.counts) > 20
                      ? parseInt(searchParams?.counts) + 20
                      : 40
                  }`}
                  className="button button-outline"
                >
                  LOAD MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PreLoved;
