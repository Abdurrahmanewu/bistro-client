import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto my-12 md: w-4/12  text-center ">
      <p className="text-yellow-500 text-2xl mb-2">---{subHeading}---</p>
      <h2 className="text-4xl border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
