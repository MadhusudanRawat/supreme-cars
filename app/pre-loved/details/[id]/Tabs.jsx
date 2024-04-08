"use client";

import { useState } from "react";

export const Tabs = () => {
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
    <div className="border-b px-[77px] border-b-neutral-200 flex items-center justify-between mb-10">
      {tabItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => handleOnToggleActive(item.id)}
          className={`pe-5 pb-[10px] border-b-[5px] ${
            item.id === active
              ? "border-b-primary text-primary"
              : "border-b-transparent text-neutral-400"
          } text-lg font-semibold capitalize`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
