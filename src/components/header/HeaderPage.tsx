'use client'

import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import logoBrand from '../../../public/ic_logo_brand.svg'
import searchNormal from '../../../public/ic_search-normal.svg'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'

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
    href: "/shop",
  },
  {
    title: "Get in touch",
    href: "/getintouch",
  },
];

const HeaderPage = () => {
  const pathname = usePathname()
  return (
    <ul >
      <div className='flex-row flex py-6 px-[88px] justify-between items-center'>
        <div className='flex-row flex relative items-center'>
          <Image className='w-[24px] h-[27px] sm:w-[37px] sm:h-[43px] lg:w-[47px] lg:h-[53px] mr-2' src={logoBrand} alt={'logo'} />
          <p className={`${styles.headerTitleLeft} text-[32px] sm:text-[56px]`}>Belive Tasmanian</p>
        </div>

        <div className={`${styles.headerRight} hidden lg:flex`}> 
          <Image width={20} height={20} src={searchNormal} alt={'icon search normal'} />
          <p className={styles.headerTitleRight}>SEARCH BELIEVE TASMANIAN</p>
        </div>
      
      </div>
      

      <div className='justify-center hidden lg:flex border-y border-y-zinc-700'>
        {listHome.map((item,index) => 
          <Link className={`${styles.titleTab} ${pathname === item.href ? "text-white" : "text-gray-500"}`} 
          key={index} href={item.href}>{item.title}</Link>
        )}
      </div>
      
    </ul>
  )
}

export default HeaderPage
