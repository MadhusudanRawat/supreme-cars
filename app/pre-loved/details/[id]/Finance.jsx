"use client";

import { useEffect, useState } from "react";

export const Finance = ({ details }) => {
  const [data, setData] = useState(null);
  const [estimateValue, setEstimateValue] = useState(0);

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    // Loan amount x interest rate x loan period (years) + loan amount / loan period (month) = monthly instalment
    const handleGetEstimateValue = () => {
      const one =
        details?.price *
          parseInt(data?.interestRate) *
          (parseInt(data?.tenure) / 12) +
        details?.price;

      const result = one / parseInt(data?.tenure);

      setEstimateValue(Math.ceil(result));
    };

    if (details && data?.interestRate && data?.tenure) handleGetEstimateValue();
  }, [details, data]);

  return (
    <div className="w-full">
      <h1 className="text-[30px] leading-[37px] tracking-tighter font-bold mb-6">
        Financing Your Car With Us
      </h1>
      <div className="p-4 lg:p-9 rounded-[20px] bg-[#F6F6F6] w-full">
        <label
          htmlFor="financeSellingPrice"
          className="ms-3 text-[15px] leading-[18px] tracking-tighter inline-block mb-2"
        >
          Selling Price
        </label>
        <div className="flex items-center gap-1 border bg-white border-[#B1B1B1] rounded-[10px] h-[53px] w-full mb-[25px] px-7 py-[18px]">
          <p className="text-[15px] leading-[18px] font-bold">$</p>
          <input
            type="number"
            name="sellingPrice"
            id="financeSellingPrice"
            value={details?.price}
            readOnly
            className="flex-1 text-[15px] leading-[18px] bg-transparent outline-none text-black"
          />
        </div>
        <label
          htmlFor="financeDownPayment"
          className="ms-3 text-[15px] leading-[18px] tracking-tighter inline-block mb-2"
        >
          Down Payment
        </label>
        <div className="flex items-center gap-1 border bg-white border-[#B1B1B1] rounded-[10px] h-[53px] w-full mb-[25px] px-7 py-[18px]">
          <p className="text-[15px] leading-[18px] font-bold">$</p>
          <input
            type="number"
            name="downPayment"
            id="financeDownPayment"
            value={data?.downPayment}
            onChange={handleOnInputChange}
            placeholder="Enter your down payment"
            className="flex-1 text-[15px] leading-[18px] bg-transparent outline-none text-black"
          />
        </div>
        <label
          htmlFor="financeInterestRate"
          className="ms-3 text-[15px] leading-[18px] tracking-tighter inline-block mb-2"
        >
          Interest Rate %
        </label>
        <select
          name="interestRate"
          id="financeInterestRate"
          value={data?.interestRate}
          onChange={handleOnInputChange}
          className="border bg-white border-[#B1B1B1] rounded-[10px] h-[53px] w-full mb-[25px] px-7 py-[16px] text-[15px] leading-[18px] outline-none text-black"
        >
          <option value="">Select Interest Rate</option>
          <option value="2.5">2.5%</option>
          <option value="6.5">6.5%</option>
          <option value="9.5">9.5%</option>
          <option value="11.5">11.5</option>
        </select>
        <label
          htmlFor="financeTenure"
          className="ms-3 text-[15px] leading-[18px] tracking-tighter inline-block mb-2"
        >
          Tenure (Months)
        </label>
        <select
          name="tenure"
          id="financeTenure"
          value={data?.tenure}
          onChange={handleOnInputChange}
          className="border bg-white border-[#B1B1B1] rounded-[10px] h-[53px] w-full mb-10 px-7 py-[16px] text-[15px] leading-[18px] outline-none text-black"
        >
          <option value="">Select Interest Rate</option>
          <option value="12">12 Months</option>
          <option value="18">18 Months</option>
          <option value="24">24 Months</option>
          <option value="48">48 Months</option>
        </select>
        <div className="bg-white rounded-[20px] h-[242px] flex flex-col items-center justify-center gap-1">
          <p className="text-[25px] tracking-tighter leading-[30px]">
            Estimated Monthly Instalment
          </p>
          <p className="heading text-primary text-center">
            <span className="underline">$ {estimateValue}</span> Per Month
          </p>
        </div>
      </div>
    </div>
  );
};
