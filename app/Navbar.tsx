"use client"
import Link from 'next/link'
import { useState } from 'react';
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci";
import { BsFillHouseFill } from "react-icons/bs";
import { IoAlbums ,IoApps } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

interface LinkMenuProps {
    deger: string;
    content?: boolean; // Adjust this type as needed based on the actual usage
}

function LinkMenu({ deger, content }: LinkMenuProps) {
    //home-etkinlikler-düşünceler-gönderiler-profilim
    return (
        <>
            <Link href="/sayfalar/genelHaberler">
                <li className={deger}><BsFillHouseFill size={25}/>{content&&"Anasayfa"}</li>
            </Link>
            <Link href="/sayfalar/kategoriler">
                <li className={deger}><IoApps size={25}/>{content&&"Kategoriler"}</li>
            </Link>
            <Link href="/sayfalar/onerilen">
                <li className={deger}><IoAlbums size={25}/>{content&&"Önerilen"}</li>
            </Link>
            <Link href="/sayfalar/hakkinda">
                <li className={deger}><FaInfoCircle size={25}/>{content&&"Hakkında"}</li>
            </Link>

        </>
    )
}

interface ContentProps {
    content?: boolean; // Adjust this type as needed based on the actual usage
}

function Content({content}:ContentProps) {
    const deger = 'my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:text-fuchsia-600'

    return (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-10'>

            <ul className='text-center text-2xl p-20'>
                <LinkMenu  deger={deger} content={content}/>
            </ul>
        </div>

    )
}


export default function Nav() {

    const [click, setClick] = useState(false)
    const handlerClick = () => setClick(!click)



    const deger = 'hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'
    return (
        <nav>
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1'>
                <div className='flex items-center flex-1'>
                    <span className='text-3xl font-bold'>
                        <Link href="/">
                            Haberler 2024
                        </Link>
                    </span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <LinkMenu deger={deger}/>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && <Content content={click} />}
                </div>

                <button className='block sm:hidden transtion' onClick={handlerClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}

/*
const content = () => (
    const deger1='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'
    return(
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
        <div className='flex-10'>
                        <ul className='text-center text-xl p-20'>
                            <Link href="/">
                                <li className={deger1}>Home</li>
                            </Link>
                            <Link href="/">
                                <li className={deger1}>About</li>
                            </Link>
                            <Link href="/">
                                <li className={deger1}>Services</li>
                            </Link>
                            <Link href="/">
                                <li className={deger1}>Projects</li>
                            </Link>
                            <Link href="/">
                                <li className={deger1}>Contact</li>
                            </Link>
                        </ul>
        </div>
    
    )
)

*/