import Image from "next/image";

export const Overview = ({ details }) => {
  const overviewData = [
    {
      id: 1,
      imageOne: "/images/registration-date-red.png",
      imageTwo: "/images/registration-date-white.png",
      alt: "d-1",
      title: "Registration Date",
      body: `${details?.reg_date}`,
    },
    {
      id: 2,
      imageOne: "/images/depreciation-red.png",
      imageTwo: "/images/depreciation-white.png",
      alt: "d-2",
      title: "Depreciation",
      body: `$${details?.price}/year`,
    },
    {
      id: 3,
      imageOne: "/images/owner-red.png",
      imageTwo: "/images/owner-white.png",
      alt: "d-3",
      title: "No. of Owners",
      body: 1,
    },
    {
      id: 4,
      imageOne: "/images/mileage-red.png",
      imageTwo: "/images/mileage-white.png",
      alt: "d-4",
      title: "Mileage",
      body: `${details?.mileage}km`,
    },
    {
      id: 5,
      imageOne: "/images/arf-red.png",
      imageTwo: "/images/arf-white.png",
      alt: "d-5",
      title: "ARF",
      body: `$${details?.price}`,
    },
  ];

  return (
    <div className="flex gap-4 lg:gap-6 flex-wrap mb-12 lg:mb-[132px]">
      {overviewData.map((item) => (
        <div
          key={item.id}
          className="hover:bg-primary hover:text-white group max-w-full sm:max-w-[48.5%] lg:max-w-[224px] w-full shadow-dark rounded-[10px] px-[32px] py-5 flex items-center justify-center gap-[10px]"
        >
          <Image
            src={item.imageOne}
            alt={item.alt}
            width={35}
            height={35}
            className="block group-hover:hidden"
          />
          <Image
            src={item.imageTwo}
            alt={item.alt}
            width={35}
            height={35}
            className="hidden group-hover:block"
          />
          <span className="flex-1">
            <p className="text-base leading-[19px] tracking-tighter">
              {item.title}
            </p>
            <p className="font-bold leading-[22px] tracking-tighter">
              {item?.body}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};
