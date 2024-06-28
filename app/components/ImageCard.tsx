"use client"

import { useState, useEffect } from 'react';
import E from "../data/e.jpeg"
import Image from 'next/image';


import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app_firebase from "../../firebaseConfig";

const storage = getStorage(app_firebase);

interface gorselProps {
    yol?: string; // Adjust this type as needed based on the actual usage
}


async function gorselIndir({yol}:gorselProps) {
  try {
    const storageRef = ref(storage, yol);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error getting download URL:', error);
    throw error;
  }
}


interface imageProps1 {
    imgSrc?: string;
    yazi?: string;
    kategori?:string // Adjust this type as needed based on the actual usage
}


export default function ImageCard({imgSrc,yazi,kategori }:imageProps1) {
    const [gorselUri, setGorselUri] = useState('');

    useEffect(() => {
      if (imgSrc) {
        gorselIndir({yol:imgSrc})
          .then((url) => {
            setGorselUri(url);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    },[imgSrc]);
    return (
        <div className='relative overflow-hidden rounded-2xl shadow-lg group box-border p-1'>
            <Image
                src={gorselUri}
                width={500}
                height={500}
                alt="deniz"
                className='rounded-2xl transition-transform group-hover:scale-110 duration-200'
            />
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='p-4 text-white'>
                    <h3 className="text-3xl font-bold mb-2">{yazi}</h3>
                    <div className='bg-sky-400 rounded-lg w-52'>
                    <p className="text-1xl font-bold mb-2 ml-1">{kategori}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

//            <img src={gorselUri} width={500} height={500} alt="deniz" className='rounded-2xl transition-transform group-hover:scale-110 duration-200' />

/*

import React from 'react'
import { CiBookmark, CiHeart, CiShare1 } from "react-icons/ci";


export default function ImageCard({imgSrc,yazi }) {
    return (
        <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
            <img src={imgSrc} alt="" className='transition-transform group-hover:scale-110 duration-200' />
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='p-4 text-white'>
                    <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                    <p>
                        {yazi}
                    </p>
                    <div className="space-x-4 mt-4">
                        <button className="btn">
                            <CiHeart />
                        </button>
                        <button className="btn">
                            <CiBookmark />
                        </button>
                        <button className="btn">
                            <CiShare1 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

*/