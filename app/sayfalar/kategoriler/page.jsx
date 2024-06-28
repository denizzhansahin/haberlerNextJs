import KategoriCard from '@/app/components/KategoriCard'
import React from 'react'

import { IoSettingsSharp , IoPersonCircle, IoHelpCircle, IoExit} from "react-icons/io5";

import { FaRegNewspaper } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";

import { FaBook } from "react-icons/fa";
import { GiDramaMasks } from "react-icons/gi";

import E from "../../data/TR-TR.png"

export default function Profilim() {

  return (
<div className=''>
<div className='columns gap-10 border-0 border-red-500 h-full w-full mt-1'>
    <div className='m-auto'>
    <KategoriCard isim={"Gündem"} yol={"/sayfalar/haberListesi/kategori?kategori=Gündem"} icon={<FaRegNewspaper size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Türkiye"} yol={"/sayfalar/haberListesi/kategori?kategori=Türkiye"} gorsel={true} />
    <KategoriCard isim={"Dünya"} yol={"/sayfalar/haberListesi/kategori?kategori=Dünya"} icon={<BiWorld size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Siyaset"} yol={"/sayfalar/haberListesi/kategori?kategori=Siyaset"} icon={<FaBalanceScale size={300} className='m-auto group-hover:text-white' />}/>

      
    <KategoriCard isim={"Ekonomi"} yol={"/sayfalar/haberListesi/kategori?kategori=Ekonomi"} icon={<FaMoneyBill1 size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Spor"} yol={"/sayfalar/haberListesi/kategori?kategori=Spor"} icon={<MdOutlineSportsHandball size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Sağlık"} yol={"/sayfalar/haberListesi/kategori?kategori=Sağlık"} icon={<FaHeartbeat size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Teknoloji"} yol={"/sayfalar/haberListesi/kategori?kategori=Teknoloji"} icon={<FaMobile size={300} className='m-auto group-hover:text-white' />}/>

    <KategoriCard isim={"Eğitim"} yol={"/sayfalar/haberListesi/kategori?kategori=Eğitim"} icon={<FaBook size={300} className='m-auto group-hover:text-white' />}/>
    <KategoriCard isim={"Kültür-Sanat"} yol={"/sayfalar/haberListesi/kategori?kategori=Kültür-Sanat"} icon={<GiDramaMasks size={300} className='m-auto group-hover:text-white' />}/>

      
    </div>
  </div>
</div>
  )
}
