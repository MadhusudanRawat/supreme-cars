import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const BrandNewCard = ({ item }) => {
  return (
    <div className="w-[94%] md:w-[350px] m-3 lg:w-[490px] xl:w-[540px] h-[400px] md:h-[430px] lg:h-[600px] xl:h-[640px] mb-3 rounded-[10px] overflow-hidden relative shadow-bnCard bg-white">
      <Image
        src={item?.image}
        alt={item?.title}
        width={545}
        height={682}
        className="object-cover"
      />
      <p className="w-full text-center font-never-brat text-3xl lg:text-[35px] lg:leading-[46px] text-white uppercase absolute top-10 lg:top-[109px] left-0 z-10">
        {item?.title}
      </p>
      <div className="w-full absolute bottom-5 lg:bottom-[54px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center gap-[35px]">
        <p className="max-w-[260px] w-full text-[25px] leading-[30px] text-center text-white">
          {item?.body}
        </p>
        <Link
          href={item?.path}
          className="text-xl leading-[24px] tracking-[-4%] capitalize text-white font-semibold underline inline-flex items-center gap-1"
        >
          <em>Shop All {item?.title}</em>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
