import React from "react";
export const Customise = () => {
  return (
    <div className="py-[140px] px-[220px] top-[98px] w-[1921px] gap-[98px]  flex flex-row items-center">
        <div className="w-[714px] h-[532px] ap-[4px] bg-[#C4DEFD]">
        </div>
        <div className="w-[669px] h-[411px] gap-[60px]" >
            <div className="w-[669px] h-[288px] gap-[24px]">
                <h1 className="font-bold text-[72px]  leading-[87.14px] tracking-[-0.02em]">
                Customise it
                to your needs
                </h1>
                <p className="w-[669px] h-[90px] font-normal text-[18px] leading-[30px]tracking-[-0.02em] mt-6">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                </p>
                <button className="w-[171px] h-[63px] bg-[#4F9CF9] text-white rounded-[6px] flex flex-row gap-[10px] py-[20px] px-[40px] text-lg font-normal items-center mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">
            <p>Let’s Go</p>
            <span>&#8594;</span>
          </button>
            </div>
        </div>
    </div>
    
  );
};