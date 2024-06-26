"use client";

import { useState } from "react";
import { Overview } from "./Overview";

export const Tabs = ({ details }) => {
  const tabItems = [
    {
      id: 1,
      title: "overview",
    },
    {
      id: 2,
      title: "features",
    },
    {
      id: 3,
      title: "accessories",
    },
    {
      id: 4,
      title: "description",
    },
  ];

  const [active, setActive] = useState(1);

  const handleOnToggleActive = (id) => {
    setActive(id);
  };

  return (
    <>
      <div className="w-full overflow-x-auto lg:overflow-hidden border-b-[3px] px-0 lg:px-[77px] border-b-neutral-200 flex items-center justify-between gap-2 lg:gap-0 mb-4 lg:mb-10">
        {tabItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleOnToggleActive(item.id)}
            className={`pe-7 pb-1 lg:pb-[10px] border-b-[5px] ${
              item.id === active
                ? "border-b-primary text-primary"
                : "border-b-transparent text-neutral-400"
            } text-lg font-semibold capitalize`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {active === 1 ? (
        <Overview details={details} />
      ) : active === 2 ? (
        <p className="text-primary mb-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          obcaecati quaerat, fugiat explicabo officia, consequatur vero dolorem
          aperiam est ipsum ducimus non cupiditate maiores a quae odit
          praesentium nam adipisci?
        </p>
      ) : active === 3 ? (
        <p className="text-primary mb-40">
          consequatur vero dolorem aperiam est ipsum ducimus non cupiditate
          maiores a quae odit praesentium nam adipisci?
        </p>
      ) : (
        <p className="text-primary mb-40">
          sit amet consectetur adipisicing elit. Aliquam obcaecatiem aperiam est
          ipsum ducimus non cupiditate maiores a quae odit praesentium nam
          adipisci?sit amet consectetur adipisicing elit. Aliquam obcaecatiem
          aperiam est ipsum ducimu
        </p>
      )}
    </>
  );
};
