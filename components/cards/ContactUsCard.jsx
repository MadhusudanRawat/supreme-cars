import Image from "next/image";

export const ContactUsCard = ({ item }) => {
  return (
    <div
      className={`w-full lg:w-[48%] h-[76px] rounded-[10px] bg-primary hover:bg-[#B2032B] transition-all text-white flex items-center justify-between gap-8 lg:gap-[69px] py-5 px-6 lg:px-12`}
    >
      <span className="flex-1">
        {item.id === 3 ? (
          <a
            href={`tel:${item?.text}`}
            className="text-base leading-[20px] font-bold"
          >
            {item?.text}
          </a>
        ) : item.id === 5 ? (
          <a
            href={`mailto:${item?.text}`}
            className="text-base leading-[20px] font-bold"
          >
            {item?.text}
          </a>
        ) : (
          <p className="text-base leading-[20px] font-bold">{item?.text}</p>
        )}
        {item?.helper && (
          <p className="text-base leading-[20px]">{item?.helper}</p>
        )}
      </span>
      <Image src={item?.icon} alt={item?.text} width={20} height={20} />
    </div>
  );
};
