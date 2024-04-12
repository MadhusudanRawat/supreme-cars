import Link from "next/link";
import Image from "next/image";

import { SquareArrowOutUpRight } from "lucide-react";

export const CTA = ({ details }) => {
  return (
    <div className="sticky top-20 z-10 lg:max-w-[360px] h-max w-full bg-white shadow-regular rounded-[10px] py-[35px] px-[25px]">
      <div className="flex items-start justify-between mb-[6px]">
        <span className="flex-1">
          <p className="text-[11px] leading-[13px]">Pre-Owned</p>
          <p className="text-xl leading-6">{details?.model}</p>
        </span>
        <Link href="/">
          <SquareArrowOutUpRight className="w-5 h-5 text-neutral-400" />
        </Link>
      </div>
      <p className="heading text-primary mb-6">${details?.price}</p>
      <div className="bg-[#F3F3F3] p-4 rounded-[10px] flex flex-wrap gap-4 mb-10">
        <span className="w-[38%] inline-flex items-center gap-1">
          <Image
            src="/images/registration-date-red.png"
            alt="d-1"
            width={24}
            height={24}
          />
          <p className="text-sm leading-4 font-bold">{details?.reg_date}</p>
        </span>
        <span className="w-[38%] inline-flex items-center gap-1">
          <Image
            src="/images/mileage-red.png"
            alt="d-1"
            width={24}
            height={24}
          />
          <p className="text-sm leading-4 font-bold">{details?.mileage} km</p>
        </span>
        <span className="w-[10%] inline-flex items-center gap-1">
          <Image src="/images/owner-red.png" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">1</p>
        </span>
        <span className="w-[38%] inline-flex items-center gap-1">
          <Image
            src="/images/depreciation-red.png"
            alt="d-1"
            width={24}
            height={24}
          />
          <p className="text-sm leading-4 font-bold">${details?.price}/yr</p>
        </span>
        <span className="w-[38%] inline-flex items-center gap-1">
          <Image src="/images/arf-red.png" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">${details?.price}</p>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href="#BookTestDrive"
          className="px-5 py-[10px] flex-1 h-[33px] inline-flex items-center justify-center bg-primary rounded-[5px] text-white font-medium text-[10px] leading-3"
        >
          Book A Test Drive
        </Link>
        <button
          type="button"
          className="px-5 py-[10px] flex-1 inline-flex items-center justify-center h-[33px] border-2 border-primary rounded-[5px] text-primary font-medium text-[10px] leading-3"
        >
          Enquire Now
        </button>
        <a
          href={`https://api.whatsapp.com/send/?phone=+6589389555`}
          className="inline-block w-[33px] h-[33px]"
        >
          <Image
            src="/images/whatsapp.png"
            alt="whatsapp"
            width={33}
            height={33}
          />
        </a>
      </div>
    </div>
  );
};
