import Link from "next/link";
import Image from "next/image";

import { SquareArrowOutUpRight } from "lucide-react";

export const CTA = () => {
  return (
    <div className="max-w-[360px] h-max w-full bg-white shadow-regular rounded-[10px] py-[35px] px-[25px]">
      <div className="flex items-start justify-between mb-[6px]">
        <span className="flex-1">
          <p className="text-[11px] leading-[13px]">Pre-Owned</p>
          <p className="text-xl leading-6">Bentley Bentayga 6.0A</p>
        </span>
        <Link href="/">
          <SquareArrowOutUpRight className="w-5 h-5 text-neutral-400" />
        </Link>
      </div>
      <p className="heading text-primary mb-6">$460,080</p>
      <div className="bg-[#F3F3F3] p-4 rounded-[10px] flex flex-wrap gap-4 mb-10">
        <span className="inline-flex items-center gap-1">
          <Image src="/images/d-1.webp" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">16 Nov 2016</p>
        </span>
        <span className="inline-flex items-center gap-1">
          <Image src="/images/d-2.webp" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">66,000 km</p>
        </span>
        <span className="inline-flex items-center gap-1">
          <Image src="/images/d-3.webp" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">1</p>
        </span>
        <span className="inline-flex items-center gap-1">
          <Image src="/images/d-4.webp" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">$69,160/yr</p>
        </span>
        <span className="inline-flex items-center gap-1">
          <Image src="/images/d-5.webp" alt="d-1" width={24} height={24} />
          <p className="text-sm leading-4 font-bold">$375,483</p>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="px-5 py-[10px] flex-1 h-[33px] inline-flex items-center justify-center bg-primary rounded-[5px] text-white font-medium text-[10px] leading-3"
        >
          Book A Test Drive
        </button>
        <button
          type="button"
          className="px-5 py-[10px] flex-1 inline-flex items-center justify-center h-[33px] border-2 border-primary rounded-[5px] text-primary font-medium text-[10px] leading-3"
        >
          Enquiry Now
        </button>
        <button type="button" className="inline-block w-[33px] h-[33px]">
          <Image
            src="/images/social-whatsapp.webp"
            alt="whatsapp"
            width={33}
            height={33}
          />
        </button>
      </div>
    </div>
  );
};
