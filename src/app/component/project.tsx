import React from "react";
import Image from "next/image";
import circle from "@/app/assets/circle.png";

export const Project = () => {
  return (
    <div className="py-[140px] px-[220px] bottom-[140px] w-[1920px] gap-[100px] bg-white  flex items-center flex-col">
      <div className="w-[1480px] h-[547px] gap-[60px] flex flex-row">
        <div className="w-[672px] h-[411px]">
          <div className="w-[672px] h-[288px]">
            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6">
              Project Management
            </h1>
            <p className="font-normal text-[18px] leading-[30px] text-[#212529] tracking-[-0.02em] pr-[40px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="w-[201px] h-[63px] text-white text-lg font-normal items-center p-5 bg-[#4F9CF9] rounded-[6px] py-[20px] px-[40px] gap-[10px] flex flex-row mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">
              <p>Get Started</p>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>      
       {/* Work Together Section */}
       <div className="flex container gap-[24px] flex-row items-center">
  <div className="w-[1480px] h-[661px] flex flex-row items-center mt-[100px]">
    <Image className="w-full md:w-[710px] h-[661px]" src={circle} alt="Illustration of collaboration in project management" />
  </div>
  <div className="w-[710px] h-[661px]">
    <div className="w-[670px] h-[294px]"></div>
<h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6">
Work together
</h1>
<p className="font-normal text-[18px] leading-[30px] text-[#212529] tracking-[-0.02em] ">With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
<button className="w-[186px] h-[63px] text-white text-lg font-normal items-center p-5 bg-[#4F9CF9] rounded-[6px] py-[20px] px-[40px] gap-[10px] flex flex-row mt-[60px] hover:bg-[#325580] hover:cursor-pointer hover:text-sky-300">
              <p>Try it now</p>
              <span>&#8594;</span>
            </button>
  </div>
  </div>
    </div>
  );
};
