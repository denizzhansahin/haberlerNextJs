
'use client'
 
import { useSearchParams } from 'next/navigation'

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app_firebase from "../../../firebaseConfig";
import ClientComponent from './ClientComponent';


import React, { Suspense, useEffect, useState } from 'react';

const storage = getStorage(app_firebase);

interface gorselProps {
  yol?: string;
}

async function gorselIndir({ yol }: gorselProps) {
  try {
    const storageRef = ref(storage, yol);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error getting download URL:', error);
    throw error;
  }
}

interface PageProps {
  params: {
    kategori: string;
    baslik: string;
    yayinci: string;
    metin: string;
    gorsel: string;
    tarih: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const searchParams = useSearchParams()
 
  const [kategori, setKategori] = useState<string | null>(null);
  const [baslik, setBaslik] = useState<string | null>(null);
  const [yayinci, setYayinci] = useState<string | null>(null);
  const [metin, setMetin] = useState<string | null>(null);
  const [gorsel, setGorsel] = useState<string | null>(null);
  const [tarih, setTarih] = useState<string | null>(null);

  useEffect(() => {
    setKategori(searchParams.get('kategori'));
    setBaslik(searchParams.get('baslik'));
    setYayinci(searchParams.get('yayinci'));
    setMetin(searchParams.get('metin'));
    setGorsel(searchParams.get('gorsel'));
    setTarih(searchParams.get('tarih'));
  }, [searchParams]);

  if (!kategori || !baslik || !yayinci || !metin || !gorsel || !tarih) {
    return <div>Loading...</div>;
  }



  const decodedKategori = decodeURIComponent(kategori);
  const decodedBaslik = decodeURIComponent(baslik);
  const decodedYayinci = decodeURIComponent(yayinci);
  const decodedMetin = decodeURIComponent(metin);
  const decodedGorsel = decodeURIComponent(gorsel);
  const decodedTarih = decodeURIComponent(tarih);

  const gorselUri = await gorselIndir({ yol: `haberler/${decodedGorsel}` });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-rows-4 lg:text-left">
        <div className="flex justify-center items-center">
          <ClientComponent decodedGorsel={decodedGorsel} />
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            {decodedBaslik}{" "}
          </h2>
          <h2 className="mb-3 font-semibold">
            Kategori : {decodedKategori}{" "}
          </h2>
          <h2 className="mb-3 font-semibold">
            Yayıncı-Yazar : {decodedYayinci}{" "}
          </h2>
          <h2 className="mb-3 font-semibold">
            Tarih : {decodedTarih}{" "}
          </h2>
          <p className="m-0 max-w text-sm opacity-50">
            {decodedMetin}
          </p>
        </div>
      </div>
    </main>
  );
};



const PageWrapper = (props: PageProps) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page {...props} />
  </Suspense>
);

export default PageWrapper;









/*

"use client"


import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app_firebase from "../../../../../../../../firebaseConfig";

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

import React, { useState, useEffect } from 'react';

interface PageProps {
  params: {
    kategori: string;
    baslik: string;
    yayinci: string;
    metin:string;
    gorsel:string;
  };
}


const Page: React.FC<PageProps> = ({ params }) => {
  const { kategori, baslik, yayinci,metin,gorsel } = params;

  const decodedKategori = decodeURIComponent(kategori);
  const decodedBaslik = decodeURIComponent(baslik);
  const decodedYayinci = decodeURIComponent(yayinci);
  const decodedMetin = decodeURIComponent(metin);
  const decodedGorsel = decodeURIComponent(gorsel);

  const [gorselUri, setGorselUri] = useState('');

  useEffect(() => {
    if (decodedGorsel) {
      gorselIndir({yol:`haberler/${decodedGorsel}`})
        .then((url) => {
          setGorselUri(url);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  },[gorsel]);

  return (

<main className="flex min-h-screen flex-col items-center justify-between p-24">

<div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-rows-4 lg:text-left">
<div className="flex justify-center items-center">
          <img src={gorselUri} alt="deniz" className='rounded-2xl group-hover:scale-110 max-h-full h-full' />
        </div>
  <div
    
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className="mb-3 text-2xl font-semibold">
    {decodedBaslik}{" "}

    </h2>
    <h2 className="mb-3 font-semibold">
     Kategori : {decodedKategori}{" "}

    </h2>
    <h2 className="mb-3 font-semibold">
     Yayıncı-Yazar : {decodedYayinci}{" "}

    </h2>
    <p className="m-0 max-w text-sm opacity-50">
    {decodedMetin}
    </p>
  </div>

</div>
</main>

  );
};

export default Page;

*/