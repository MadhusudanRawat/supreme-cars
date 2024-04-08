import Link from "next/link";

import { CircleArrowRight } from "lucide-react";

import { PreLovedCarousel } from "@/components/carousel/PreLovedCarousel";

export const metadata = {
  title: "Pre Loved - Details",
  description: "Pre Loved - Details",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
      <section className="my-10 lg:my-[96px]">
        <div className="container">
          <h2 className="heading text-center font-bold px-4 mb-5 lg:mb-12">
            Similar cars that you may like!
          </h2>
          <PreLovedCarousel />
          <div className="flex items-center justify-center">
            <Link href="/pre-loved" className=" button">
              View All <CircleArrowRight className="h-6 w-6 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
