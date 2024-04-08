import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export const ServiceCard = ({ item }) => {
  return (
    <div className="w-full h-[250px] md:w-[350px] md:h-[260px] overflow-hidden rounded-[10px] relative">
      <Image
        src={item?.image}
        alt={item?.title}
        width={350}
        height={260}
        className="w-full"
      />
      <Link
        href={item?.path}
        className="flex items-center gap-[10px] text-2xl font-bold uppercase text-white absolute bottom-2 left-2 z-10"
      >
        {item?.title}
        <ArrowRight className="w-7 h-7" />
      </Link>
    </div>
  );
};
