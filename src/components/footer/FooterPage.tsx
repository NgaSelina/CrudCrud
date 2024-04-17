'use client'

import React from "react";
import localFont from 'next/font/local'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const myFont = localFont({
  src: '../../fonts/Roboto-Regular.ttf',
  display: 'swap',
})

const listHome = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Stories",
    href: "/stories",
  },
  {
    title: "Shop",
    href: "/shops",
  },
  {
    title: "Get in touch",
    href: "/getintouch",
  },
];

const FooterPage = () => {
  const pathname = usePathname()
  return (
    <ul style={{ backgroundColor: '#0D0D0D'}}>
      <div className={`flex justify-between px-[88px] pt-[78px] pb-[40px] ${myFont.className}`}>
        <div className="flex">
          <span style={{color:'#808080'}} className="text-[26px] font-semibold tracking-widest mr-4">BELIEVE</span>
          <span className="text-[26px] font-semibold tracking-widest">TASMANIAN</span>
        </div>
        <p style={{color: '#999999'}} className="w-[324px] h-[168px] text-right text-[14px]">The Tasmanian story began over 60,000 years ago. We acknowledge the ancient history of the Tasmanian Aboriginal people as the First People of lutruwita/Tasmania. For over 2,000 generations, Tasmanian Aboriginal people’s culture and language have been and continue to be based on a deep and continuous connection to family, community, and the land, sea, and waterways.</p>
      </div>
      <div className='justify-center flex border-b border-b-zinc-700 pb-[24px] '>
        {listHome.map((item,index) => 
          <Link className={`text-[24px] mr-[40px] font-normal ${pathname === item.href ? "text-white" : "text-gray-500"}`}  key={index} href={item.href}>{item.title}</Link>
        )}
      </div>
      <div className={`mt-[20px] pb-[53px] justify-center flex ${myFont.className}`}>
        <span style={{color: '#999999'}} className={`text-[12px] font-normal mr-[40px]`}>Privacy Policy</span> 
        <span style={{color: '#999999'}} className={`text-[12px] font-normal`}>Terms & Conditions</span>
      </div>
    </ul>
  );
};

export default FooterPage;
