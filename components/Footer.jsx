import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const siteLinks = [
    {
      id: 1,
      title: "Brand New",
      path: "/brand-new",
    },
    {
      id: 2,
      title: "Pre-Loved",
      path: "/pre-loved",
    },
    {
      id: 3,
      title: "Workshop",
      path: "/workshop",
    },
    {
      id: 4,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 5,
      title: "Services",
      path: "/services",
    },
  ];
  return (
    <>
      <footer className="bg-footer">
        <div className="container p-4 xl:p-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={251}
              height={89}
              className="mb-[26px]"
            />
          </Link>
          <div className="flex flex-col gap-8 lg:flex-row items-start">
            <div className="w-full lg:w-1/2">
              <p className="text-white font-bold">Address</p>
              <p className="text-white mb-[22px]">
                2 Jalan Kilang Barat, 01-01, Singapore 159346
              </p>
              <p className="text-white font-bold">General Enquiries</p>
              <p className="text-white mb-10">+65 6266 5555</p>
              <p className="text-white font-bold">Operating Hours</p>
              <p className="text-white">
                Monday-Saturday <strong>10:00 AM - 06:30 PM</strong>
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-base leading-5 text-white font-bold mb-[25px]">
                Sitemap
              </p>
              <ul className="flex flex-col gap-[25px]">
                {siteLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="text-base leading-[19px] text-white transition-colors lg:hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#303030]">
        <div className="container">
          <div className=" text-white px-4 xl:px-0 py-3 flex flex-col md:flex-row gap-3 items-center justify-center md:justify-between">
            <p className="text-base leading-[20px] text-center">
              &copy; Copyright Cars & Coffee Gem Pte Ltd 2023{" "}
              <Link href="/">Privacy</Link>
              <Link href="/">Legal</Link>
            </p>
            <p className="text-base leading-[20px]">Powered by Sgcarmart</p>
          </div>
        </div>
      </div>
    </>
  );
};
