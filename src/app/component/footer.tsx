import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png"
export const Footer = () => {
  return (
<div className=" w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] gap-[200px] bg-[#043873] ">
    <div className="w-[1480px] h-[260px] gap-[100px]">
        <div className="w-[1480px] h-[169px] gap-[100px]  grid grid-cols-4">
            <div className="w-[295px] h-[169px] gap-[15px]">
            <Image className="w-[191px] h-[34px] " src={logo} alt=" logo" />
                <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-white pt-5"> whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className="w-[295px] h-[127px] gap-[15px] text-white "> 
               <ul>
                <li className="w-[68px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-0.02em] p-4 hover:text-[#FFE492] " >Product</li>
                <li className="w-[70px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 hover:text-[#FFE492] ">Overview</li>
                <li className="w-[70px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4  hover:text-[#FFE492]">Pricing</li>
                <li className="w-[177px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 hover:text-[#FFE492] flex">Customer stories</li>
               </ul>
            </div>
            <div className="w-[295px] h-[127px] gap-[15px] text-white "> 
               <ul>
                <li className="w-[68px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-0.02em] p-4 hover:text-[#FFE492] " >Resources</li>
                <li className="w-[70px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 hover:text-[#FFE492] ">Blog</li>
                <li className="w-[177px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4  hover:text-[#FFE492]">Guides & tutorials</li>
                <li className="w-[130px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4  hover:text-[#FFE492]flex">Help center</li>
               </ul>
            </div>
            <div className="w-[295px] h-[127px] gap-[15px] text-white "> 
               <ul>
                <li className="w-[68px] h-[22px] text-lg font-bold leading-[21.78px] tracking-[-0.02em] p-4 hover:text-[#FFE492]" >Company</li>
                <li className="w-[150px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 flex hover:text-[#FFE492]">About us</li>
                <li className="w-[70px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 hover:text-[#FFE492] ">Careers</li>
                <li className="w-[177px] h-[20px] text-base font-normal leading-[20px] tracking-[-0.02em] p-4 hover:text-[#FFE492]">Media kit</li>
               </ul>
            </div>
        </div>
        <div className="flex justify-center pt-10">
  <div className="w-[1480px] h-[1px] bg-[#2E4E73]"></div>
</div>
    </div>
    <div className="w-[1480px] h-[20px] justify-items-center"  >
    
<p className="font-normal text-base leading-5 tracking-[-0.02em] text-white ">©2021 Whitepace LLC.</p>
    
</div>
    </div>
  );
};