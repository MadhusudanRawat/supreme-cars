"use client";

export const HelperForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-5 mb-5"
    >
      <select
        name="country"
        id="helperFormCountry"
        className="input input-small w-full text-neutral-400"
      >
        <option value="">Country</option>
      </select>
      <select
        name="carType"
        id="helperFormCarType"
        className="input input-small w-full text-neutral-400"
      >
        <option value="">Car Type</option>
      </select>
      <select
        name="company"
        id="helperFormCompany"
        className="input input-small w-full text-neutral-400"
      >
        <option value="">Company</option>
      </select>
      <select
        name="model"
        id="helperFormModel"
        className="input input-small w-full text-neutral-400"
      >
        <option value="">Model</option>
      </select>
      <button type="submit" className="button button-small">
        Search
      </button>
    </form>
  );
};
