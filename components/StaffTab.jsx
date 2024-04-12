"use client";

import { useState } from "react";
import { StaffCarousel } from "./carousel/StaffCarousel";

export const StaffTab = () => {
  const items = [
    {
      id: 1,
      title: "Sales",
    },
    {
      id: 2,
      title: "Customer Relationship",
    },
    {
      id: 3,
      title: "Management",
    },
  ];

  const [active, setActive] = useState(1);

  const handleToggleActive = (id) => {
    setActive(id);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 xl:p-0">
      <div className="flex-1 flex flex-col mb-[99px]">
        <h2 className="heading mb-6 lg:mb-0">Our Staff</h2>
        <ul className="flex-1 flex flex-col justify-end gap-[30px]">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleToggleActive(item.id)}
              className={`w-max border-b-2 ${
                active === item.id
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-neutral-500 lg:hover:border-b-primary lg:hover:text-primary"
              } transition-all cursor-pointer font-semibold tracking-tight pb-2 pe-5`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <StaffCarousel />
    </div>
  );
};
