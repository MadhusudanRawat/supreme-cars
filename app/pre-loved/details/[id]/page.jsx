import Image from "next/image";

import { CTA } from "./CTA";
import { Finance } from "./Finance";
import { Overview } from "./Overview";
import { Tabs } from "./Tabs";
import { TestDriveForm } from "@/components/forms/TestDriveForm";
import { Carousel } from "./Carousel";

const PreLovedDetails = () => {
  const highlightItems = [
    {
      id: 1,
      image: "/images/h-1.png",
      alt: "h-1",
      title: "180-Point Inspection",
    },
    {
      id: 2,
      image: "/images/h-2.png",
      alt: "h-2",
      title: "48-Hour Money Back Guarantee",
    },
    {
      id: 3,
      image: "/images/h-3.png",
      alt: "h-3",
      title: "12-Month Warranty for engine & Gearbox",
    },
    {
      id: 4,
      image: "/images/h-4.png",
      alt: "h-4",
      title: "No Mileage Tampering",
    },
  ];

  return (
    <>
      <Carousel />
      <section className="py-12">
        <div className="container">
          <div className="flex gap-10">
            <div className="flex-1">
              <Tabs />
              <Overview />
              <Finance />
            </div>
            <CTA />
          </div>
        </div>
      </section>
      <section className="pt-[116px] pb-[96px]">
        <div className="container">
          <div className="bg-details-highlight flex items-center justify-center gap-16">
            <Image
              src="/images/logo-color.png"
              alt="logo-color"
              width={190}
              height={73}
              className="me-4"
            />
            <div className="flex items-start gap-10">
              {highlightItems.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    item.id === 3 ? "max-w-[170px]" : "max-w-[160px]"
                  } flex flex-col items-center justify-center gap-[22px]`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={96}
                    height={96}
                  />
                  <p className="text-center text-white font-bold text-[19px] leading-[23px] tracking-tighter">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-test-drive">
        <div className="container">
          <h1 className="font-never-brat text-xl lg:text-[30px] lg:leading-[39px] text-white uppercase">
            FEEL YOUR RIDE
          </h1>
          <p className="text-[40px] leading-[48px] tracking-tighter text-white mb-10">
            Arrange a Test Drive
          </p>
          <div className="flex">
            <TestDriveForm />
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreLovedDetails;
