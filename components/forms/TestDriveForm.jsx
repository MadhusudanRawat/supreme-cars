"use client";

export const TestDriveForm = () => {
  const handleOnFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleOnFormSubmit} className="w-full lg:w-1/2">
      <div className="flex flex-col md:flex-row items-center gap-[30px] mb-[26px]">
        <div className="w-full md:flex-1">
          <label
            htmlFor="testDriveName"
            className="text-[15px] leading-[18px] text-white inline-block mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="testDriveName"
            placeholder="Name"
            className="border border-white bg-black/30 p-4 text-[15px] leading-[18px] text-white placeholder:text-white w-full rounded-[5px]"
          />
        </div>
        <div className="w-full md:flex-1">
          <label
            htmlFor="testDriveEmail"
            className="text-[15px] leading-[18px] text-white inline-block mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="testDriveEmail"
            placeholder="Email"
            className="border border-white bg-black/30 p-4 text-[15px] leading-[18px] text-white placeholder:text-white w-full rounded-[5px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[30px] mb-[26px]">
        <div className="w-full md:flex-1">
          <label
            htmlFor="testDrivePhone"
            className="text-[15px] leading-[18px] text-white inline-block mb-2"
          >
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="testDrivePhone"
            placeholder="Phone"
            className="border border-white bg-black/30 p-4 text-[15px] leading-[18px] text-white placeholder:text-white w-full rounded-[5px]"
          />
        </div>
        <div className="w-full md:flex-1">
          <label
            htmlFor="testDriveModel"
            className="text-[15px] leading-[18px] text-white inline-block mb-2"
          >
            Model Interest:
          </label>
          <select
            name="email"
            id="testDriveModel"
            className="border border-white bg-black/30 p-4 text-[15px] leading-[18px] text-white placeholder:text-white w-full rounded-[5px]"
          >
            <option value="">Model Interest</option>
          </select>
        </div>
      </div>
      <div className="w-full mb-8">
        <label
          htmlFor="testDriveMessage"
          className="text-[15px] leading-[18px] text-white inline-block mb-2"
        >
          Message:
        </label>
        <textarea
          type="text"
          name="phone"
          rows={6}
          id="testDriveMessage"
          placeholder="Message"
          className="border border-white bg-black/30 p-4 text-[15px] leading-[18px] text-white placeholder:text-white w-full rounded-[5px]"
        />
      </div>
      <button type="submit" className="button button-full">
        Submit
      </button>
    </form>
  );
};
