import React from "react";
export const Use = () => {
  return (
    <div className="py-[140px] px-[220px] top-[92px] w-[1920px] gap-[98px] bg-[#043873] text-white flex justify-between items-center">
      <div className="w-[697px] h-[294px] gap-[60px]">
        <div className="w-[697px] h-[171px] gap-[24px]">
          <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6">
          Use as Extension
          </h2>
          <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] pr-[40px]">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="w-[171px] h-[63px] bg-[#4F9CF9] rounded-[6px] flex flex-row gap-[10px] p-5 text-lg font-normal items-center mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">
            <p>Let’s Go</p>
            <span>&#8594;</span>
          </button>
        </div>
      </div>
      <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
    </div>
    
  );
};