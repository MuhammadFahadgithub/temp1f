import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { NavigationMenuDemo } from "@/components/NavigationMenu";



export default function Header () {
  return (
    
      <header className=" w-full h-[60px] bg-white flex justify-between items-center">
        {/* left */}
        <div className="flex justify-center items-center">
        
        
        <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
        </div>

{/* navbar */}
        <ul className="hidden md:block">
            
            <li className="space-x-5">
            <Link href={""}>
            <NavigationMenuDemo/></Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrirals</Link>
            <Link href={""}>Brands</Link>

            </li>
        </ul>
        {/* search input */}
        <div className="hidden md:block">
        <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
        <FiSearch className="text-xt ml-2"/>
        <input placeholder="search item..." className="w-full ml-2 outline-none h-full  rounded-[62px] bg-[#F0F0F0]"></input>
        </div>
        </div>
        {/* cart */}
        <div className="flex items-center mr-7 space-x-5 ">
        <FiSearch className="text-xt ml-2 md:hidden"/>
        <FaCartShopping className="text-2xl" />
        <IoMdContact  className="text-2xl" />
        </div>
      </header>

  );
}




