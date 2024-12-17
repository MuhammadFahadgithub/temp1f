   import { ImCross } from "react-icons/im";


export default function announcementbar() {
  return (
    <main className="bg-[#000] w-full h-[38px] flex justify-center items-center relative">
      {/* left */}
      <div className="flex justify-center items-center ">
        <h3 className="text-white text-xs sm:text-sm ">Sign up and get 20% off to your first order.</h3>
        <button className="text-white ml-3 text-xs sm:text-sm">Sign Up Now</button>
      </div>
      <ImCross className="text-white absolute right-[50px] hidden sm:block"/>
 </main>
  );
}
