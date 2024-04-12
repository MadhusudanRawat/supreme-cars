import { Facebook } from "lucide-react";

import { ContactUsData } from "@/constants";
import { ContactUsCard } from "@/components/cards/ContactUsCard";
import { StaffTab } from "@/components/StaffTab";

const AboutUs = () => {
  return (
    <main>
      <section className="bg-about-us-page">
        <div className="container h-full p-4 lg:p-0">
          <div className="h-full flex flex-col justify-end">
            <h1 className="text-3xl lg:text-5xl lg:leading-[62px] text-white font-never-brat uppercase">
              about us
            </h1>
            <p className="text-xl lg:text-[32px] lg:leading-[39px] text-white mb-6">
              Get To Know Us Better
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-[120px]">
        <div className="container p-4 lg:p-0">
          <p className="mx-auto max-w-[506px] w-full text-xl leading-[25px]">
            Supreme Cars was founded by Devin Koo and Eric Chua, who have more
            than 30 years of experience combined in the car industry here in
            Singapore and in the region, and had our humble beginnings in the
            dealing of pre-loved cars. These days, we are proud to offer both
            brand new and pre-loved cars – from bread-and-butter models,
            hatchbacks, sedans, SUVs to super-luxury models.
          </p>
        </div>
      </section>
      {/* <section className="bg-[#EAEAEA] py-10 lg:py-14">
        <div className="container">
          <StaffTab />
        </div>
      </section> */}
      <section className="py-10 lg:py-[108px]">
        <div className="container p-4 lg:p-0">
          <h2 className="heading text-center mb-4 lg:mb-12">Contact Us</h2>
          <div className="max-w-[890px] w-full mx-auto flex flex-wrap gap-4 lg:gap-[30px] mb-4 lg:mb-[103px]">
            {ContactUsData.map((item) => (
              <ContactUsCard key={item.id} item={item} />
            ))}
          </div>
          <h2 className="heading text-center mb-[30px]">
            Stay Updated On Our Social Media
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-primary inline-flex items-center justify-center">
              <Facebook className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
