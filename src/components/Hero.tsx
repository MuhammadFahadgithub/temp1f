import Image from "next/image"
export default function Hero(){
    return(
        <main className="w-full h-full md:h-[500px] flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
            {/* left */}
            <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
                <h1 className="text-2xl md:text-6xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed     
                    <br />to bring out your individuality and cater to your sense of style.</p>
                <button className="bg-black py-2 px-8 rounded-[16px] mt-4 text-sm text-white">Shop Now</button>
                
            </div>
             {/* right */}
             <div className="relative">
            <Image src={"/profile.png"} className="w-[500px] mr-4" width={200} height={200} alt="profile"></Image>
           {/* star */}
           
            <Image src={"/star.png"} className="w-[50px] md:w-[100px] absolute top-[100px] left-10 md:top-[300px] md:left-[-100px]" width={200} height={200} alt="profile"></Image>
            <Image src={"/star.png"} className="w-[100px] absolute top-0 right-0 md:top-[50px] md:right-[30px]" width={200} height={200} alt="profile"></Image>
             </div>
        </main>
    )
}