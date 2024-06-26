import Image from "next/image";
import Link from "next/link";

export const StaffCard = () => {
  return (
    <div className="w-full p-2 xl:ps-8">
      <Image
        src="/images/staff-1.webp"
        alt="staff-1"
        width={220}
        height={220}
        className="object-cover w-full mb-[14px] rounded-[15px] ring-2 ring-neutral-200"
      />
      <p className="text-xl leading-[30px] font-bold">Jonathan Tan</p>
      <p className="text-lg tracking-tight leading-[25px] mb-[15px]">
        Sales & Marketing Manager
      </p>
      <Link href="/about-us" className="button button-full">
        Get In Touch
      </Link>
    </div>
  );
};
