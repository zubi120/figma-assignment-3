import Image from "next/image";
import apple from "@/app/assets/Apple.jpg"
import microsoft from "@/app/assets/microsoft 1.jpg"
import slack from "@/app/assets/Slack_Technologies_Logo 1.jpg"
import group from "@/app/assets/Group 246.jpg"


export const Sponsors = () => {
  return (
    <footer>
    <div className="w-[1922px] h-[538px]  top-[4654px] py-[140px] px-[220px] ">
      <div className="w-[1482px] h-[87px] ">
      <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-center ">Our sponsors</h1>
      </div>
      <div className="w-[1482px] h-[171px] flex justify-between pt-[100px]">
    <Image className="w-[55.47px] h-[68px] gap-[4px]" src={apple} alt="apple logo" />
    <Image className="w-[287px] h-[62px] " src={microsoft} alt="microsoft logo" />
    <Image className="w-[280px] h-[71px] " src={slack} alt="slack logo" />
    <Image className="w-[211px] h-[69.81px] gap-[4px]" src={group} alt="google logo" />
      </div>
    </div>
    </footer>
  );
};