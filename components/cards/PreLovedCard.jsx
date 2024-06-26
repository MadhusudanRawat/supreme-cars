import Image from "next/image";
import Link from "next/link";

import { Circle } from "lucide-react";

export const PreLovedCard = ({ mb, width, item }) => {
  return (
    <Link
      href={`/pre-loved/details/${item?.id}`}
      className={`block ${
        width ? width : "w-[92%] md:w-[340px] lg:w-[310px] xl:w-[350px]"
      } ${
        mb ? "m-3" : ""
      } overflow-hidden rounded-[10px] border-l-4 border-l-primary p-4 ps-[10px] bg-white shadow-plCard`}
    >
      <div className="flex items-start justify-between mb-[10px]">
        <span>
          <p className="text-xl leading-[24px] font-bold uppercase w-[220px] truncate">
            {item?.model}
          </p>
          <p className="text-neutral-400 uppercase">{item?.veh_type}</p>
        </span>
        <span className="badge">${item?.price}</span>
      </div>
      <Image
        src={item?.img_link}
        alt={item?.model}
        width={405}
        height={156}
        className="mx-auto"
      />
      <div className="mx-auto my-4 w-max flex items-center justify-center gap-5 px-[10px] py-[6px] bg-neutral-600">
        <p className="text-sm leading-[17px] text-white">{item?.mileage}KM</p>
        <p className="text-sm leading-[17px] text-white">
          Reg. {item?.reg_date}
        </p>
      </div>
      <div className="w-max mx-auto flex items-center justify-center gap-2 lg:gap-2 xl:gap-4">
        <p className="text-sm leading-[17px] text-neutral-400">
          {item?.reg_date}
        </p>
        <Circle className="w-[5px] h-[5px] text-black fill-black" />
        <p className="text-sm leading-[17px] text-neutral-400">{item?.gear}</p>
        <Circle className="w-[5px] h-[5px] text-black fill-black" />
        <p className="text-sm leading-[17px] text-neutral-400">
          {item?.eng_cap}
        </p>
        <Circle className="w-[5px] h-[5px] text-black fill-black" />
        <p className="text-sm leading-[17px] text-neutral-400">
          {item?.status}
        </p>
      </div>
    </Link>
  );
};
