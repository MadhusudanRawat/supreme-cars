import Link from "next/link";
import Image from "next/image";

import { CircleArrowRight } from "lucide-react";

import { HelperForm } from "@/components/forms/HelperForm";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { PreLovedCarousel } from "@/components/carousel/PreLovedCarousel";
import { BrandNewCarousel } from "@/components/carousel/BrandNewCarousel";
import { ServicesData } from "@/constants";

export default function Home() {
  return (
    <main>
      <section className="bg relative">
        <div className="container px-4">
          <h1 className="text-3xl lg:text-5xl lg:leading-[62px] text-white font-never-brat uppercase">
            love the drive<span className="text-primary">.</span>
          </h1>
          <p className="text-xl lg:text-[32px] lg:leading-[39px] text-white mb-6">
            A Ride for Gentleman, The Lady and Family
          </p>
          <Link href="/pre-loved" className="button">
            View All <CircleArrowRight className="h-6 w-6 -rotate-45" />
          </Link>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="container">
          <div className="px-4 lg:px-[62px] -mt-[90px] relative z-10">
            <div className="w-full bg-white p-5 lg:px-14 lg:py-6 rounded-[10px] shadow-regular">
              <p className="font-bold text-center mb-[14px]">
                Not Sure which Vehicle to pick? Find it{" "}
                <span className="text-primary uppercase">here</span>
              </p>
              <Image
                src="/images/title-border.webp"
                alt="title border"
                width={460}
                height={2}
                className="mx-auto mb-10"
              />
              <HelperForm />
            </div>
          </div>
          <div className="pt-10 pb-5 lg:pb-[50px]">
            <h2 className="heading text-center uppercase mb-[10px]">
              pre-loved
            </h2>
            <Image
              src="/images/title-border.webp"
              alt="title border"
              width={460}
              height={2}
              className="mx-auto mb-5 lg:mb-[50px]"
            />
            <PreLovedCarousel />
            <div className="flex items-center justify-center">
              <Link href="/pre-loved" className=" button">
                View All <CircleArrowRight className="h-6 w-6 -rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 lg:py-[86px]">
        <div className="container">
          <h2 className="heading text-center uppercase mb-[10px]">Brand New</h2>
          <Image
            src="/images/title-border.webp"
            alt="title border"
            width={460}
            height={2}
            className="mx-auto mb-5 lg:mb-[50px]"
          />
          <BrandNewCarousel />
          <div className="flex items-center justify-center">
            <Link href="/brand-new" className=" button">
              View All <CircleArrowRight className="h-6 w-6 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-about-us">
        <div className="container">
          <h2 className="heading text-center mb-[10px] text-white">About Us</h2>
          <Image
            src="/images/title-border-white.webp"
            alt="title border white"
            width={460}
            height={2}
            className="mx-auto mb-16"
          />
          <div className="max-w-[406px]">
            <p className="leading-[25px] text-white mb-8">
              With more than 30 years of experience combined in Singapore’s car
              industry, the founders of Supreme Cars, Devin Koo and Eric Chua,
              believe in bringing a whole slew of benefits with a top-tier
              customer service in mind – allowing customers to discover brand
              new and pre-loved cars, from bread-and-butter models, hatchbacks,
              sedans, SUVs to super-luxury models – in our fully-equipped
              showroom of over 11,000 sqft that is situated right in the heart
              of the city.
            </p>
            <Link href="/brand-new" className=" button">
              Read More <CircleArrowRight className="h-6 w-6 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-[38px]">
        <div className="container p-4 md:p-6 lg:p-0">
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-5 xl:justify-between -mt-[135px]">
            {ServicesData.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-beverages">
        <div className="container">
          <div className="p-4 max-w-[536px] w-full overflow-hidden">
            <p className="text-xl leading-[29px] text-white mb-9">
              We provide a delicious range of pastries and hot/cold beverages on
              site, all of which are served in a calm, relaxing environment.
              Simply sit back, relax and enjoy!
            </p>
            <Link href="/brand-new" className=" button">
              View Cars <CircleArrowRight className="h-6 w-6 -rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
