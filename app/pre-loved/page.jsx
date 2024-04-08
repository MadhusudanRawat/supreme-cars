import Link from "next/link";

import { CircleArrowRight } from "lucide-react";

import { PreLovedCard } from "@/components/cards/PreLovedCard";
import { Sort } from "./Sort";
import { Filters } from "./Filters";
import { CarsListData } from "@/constants";

const PreLoved = () => {
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
        <div className="container p-4">
          <Filters />
          <div className="flex flex-col gap-5 lg:gap-9 md:flex-row">
            <Sort />
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 xl:gap-8 mb-10">
                {CarsListData.map((item) => (
                  <PreLovedCard
                    key={item.id}
                    item={item}
                    width="w-full xl:w-[47.5%]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href="/pre-loved/details/id"
                  className="button button-outline"
                >
                  Load More
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
