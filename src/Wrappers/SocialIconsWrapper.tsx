import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Whatsapp from "@/app/Images/Layer 65 1.png";
import Phone from "@/app/Images/Layer 67 1.png";

const SocialIconsWrapper = () => {
  return (
    <div style={{marginBottom:"430%"}} className="relative flex flex-col items-center gap-1">
      <Link href={""} target={"_blank"}>
        <div className="flex items-center  justify-center bg-green-600 text-white p-3 rounded-full">
          <Image src={Whatsapp} width={40} height={40} alt='whatsapp' />
        </div>
      </Link>
      <Link href={""} target={"_blank"}>
        <div className="flex items-center mt-[20px] justify-center bg-green-600 text-white p-3 rounded-full">
          <Image  src={Phone} width={40} height={40} alt='phone' />
        </div>
      </Link>
    </div>
  );
}

export default SocialIconsWrapper;
