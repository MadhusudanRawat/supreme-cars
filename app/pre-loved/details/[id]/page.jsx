import Image from "next/image";

import { CTA } from "./CTA";
import { Finance } from "./Finance";
import { Overview } from "./Overview";
import { Tabs } from "./Tabs";
import { TestDriveForm } from "@/components/forms/TestDriveForm";
import { Carousel } from "./Carousel";
import { CarsListData } from "@/constants";

export const getDetails = (id) => {
  const response = CarsListData.filter((car) => car.id === id);

  return response ? response[0] : null;
};

const PreLovedDetails = ({ params }) => {
  const details = getDetails(params?.id);
  console.log(details);

  const highlightItems = [
    {
      id: 1,
      image: "/images/h-1.webp",
      alt: "h-1",
      title: "180-Point Inspection",
    },
    {
      id: 2,
      image: "/images/h-2.webp",
      alt: "h-2",
      title: "48-Hour Money Back Guarantee",
    },
    {
      id: 3,
      image: "/images/h-3.webp",
      alt: "h-3",
      title: "12-Month Warranty for engine & Gearbox",
    },
    {
      id: 4,
      image: "/images/h-4.webp",
      alt: "h-4",
      title: "No Mileage Tampering",
    },
  ];

  return (
    <>
      <Carousel />
      <section className="py-5 lg:py-12">
        <div className="container p-4 xl:p-0">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex-1">
              <Tabs />
              <Overview details={details} />
              <Finance details={details} />
            </div>
            <CTA details={details} />
          </div>
        </div>
      </section>
      <section className="py-5 lg:pt-[116px] lg:pb-[96px]">
        <div className="container p-4 xl:p-0">
          <div className="bg-details-highlight flex flex-col xl:flex-row items-center justify-start py-10 md:px-[60px] gap-10 lg:gap-12">
            <Image
              src="/images/logo-color.webp"
              alt="logo-color"
              width={180}
              height={70}
              className="lg:me-4"
            />
            <div className="flex flex-wrap items-start gap-0 lg:gap-10">
              {highlightItems.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    item.id === 3
                      ? "w-1/2 p-4 lg:p-0 lg:w-[170px]"
                      : "w-1/2 p-4 lg:p-0 lg:w-[140px]"
                  } flex flex-col items-center justify-center gap-[22px]`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={72}
                    height={72}
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
      <section id="BookTestDrive" className="bg-test-drive">
        <div className="container p-4 xl:p-0">
          <h1 className="font-never-brat text-xl lg:text-[30px] lg:leading-[39px] text-white uppercase">
            FEEL YOUR RIDE
          </h1>
          <p className="text-[40px] leading-[48px] tracking-tighter text-white mb-10">
            Arrange a Test Drive
          </p>
          <div className="flex">
            <TestDriveForm />
            <div className="w-1/2 hidden lg:block"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreLovedDetails;
