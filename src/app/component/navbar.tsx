import Image from "next/image"
import logo from "@/app/assets/Logo.png"
const Navbar=() =>{
    return(
        <>
        <div className="w-[1920px] h=[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
            <div className="w-[191px]- h-[34px]">
                <Image className="w-[191px] h-[34px]"
                src={logo} alt="logo" />
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between items-center ">
                <div className="w-[549px] h-[23px]">
                <ul className="flex flex-row justify-between text-white "> 
                    <li className="hover:text-[#FFE492]">Products</li>
                    <li className="hover:text-[#FFE492]">Solution</li>
                    <li className="hover:text-[#FFE492]">Resources</li>
                    <li className="hover:text-[#FFE492]">Pricing</li>
                </ul>
                </div>
                <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-[#ffe800]">
                        login
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar