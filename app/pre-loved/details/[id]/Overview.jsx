import Image from "next/image";

export const Overview = () => {
  const overviewData = [
    {
      id: 1,
      image: "/images/d-1.webp",
      alt: "d-1",
      title: "Registration Date",
      body: "18 Nov 2016",
    },
    {
      id: 2,
      image: "/images/d-2.webp",
      alt: "d-2",
      title: "Depreciation",
      body: "$69,160/yr",
    },
    {
      id: 3,
      image: "/images/d-3-light.webp",
      alt: "d-3",
      title: "No. of Owners",
      body: "1",
    },
    {
      id: 4,
      image: "/images/d-4.webp",
      alt: "d-4",
      title: "Mileage",
      body: "66,000 km",
    },
    {
      id: 5,
      image: "/images/d-5.webp",
      alt: "d-5",
      title: "ARF",
      body: "$375,483",
    },
  ];
  return (
    <div className="flex gap-6 flex-wrap mb-[132px]">
      {overviewData.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id === 3 ? "bg-primary text-white" : "bg-white"
          } max-w-[224px] w-full shadow-dark rounded-[10px] px-[32px] py-5 flex items-center justify-center gap-[10px]`}
        >
          <Image src={item.image} alt={item.alt} width={35} height={35} />
          <span className="flex-1">
            <p className="text-base leading-[19px] tracking-tighter">
              {item.title}
            </p>
            <p
              className={`font-bold leading-[22px] tracking-tighter ${
                item.id === 3 ? "text-white" : "text-primary"
              }`}
            >
              {item?.body}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};
