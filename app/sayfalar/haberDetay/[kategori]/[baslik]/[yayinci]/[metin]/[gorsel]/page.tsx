"use client"

import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app_firebase from "../../../../../../../../firebaseConfig";

const storage = getStorage(app_firebase);

interface gorselProps {
  yol?: string; // Adjust this type as needed based on the actual usage
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

import React, { useState, useEffect } from 'react';

interface PageProps {
  params: {
    kategori: string;
    baslik: string;
    yayinci: string;
    metin: string;
    gorsel: string;
  };
}

import Image from 'next/image';

const Page: React.FC<PageProps> = ({ params }) => {
  const { kategori, baslik, yayinci, metin, gorsel } = params;

  const decodedKategori = decodeURIComponent(kategori);
  const decodedBaslik = decodeURIComponent(baslik);
  const decodedYayinci = decodeURIComponent(yayinci);
  const decodedMetin = decodeURIComponent(metin);
  const decodedGorsel = decodeURIComponent(gorsel);

  const [gorselUri, setGorselUri] = useState('');

  useEffect(() => {
    if (decodedGorsel) {
      gorselIndir({ yol: `haberler/${decodedGorsel}` })
        .then((url) => {
          setGorselUri(url);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [gorsel]);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-rows-4 lg:text-left">
        <div className="flex justify-center items-center">
          <Image
            src={gorselUri}
            alt="deniz"
            className='rounded-2xl group-hover:scale-110 max-h-full h-full'
            width={500} // Adjust these values based on your layout needs
            height={500} // Adjust these values based on your layout needs
          />
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



export const getStaticPaths: GetStaticPaths = async () => {
  // İlk başta birkaç popüler sayfa oluşturulacak
  const paths = [
    { params: { kategori: 'spor', baslik: 'futbol', yayinci: 'yazar1', metin: 'metin1', gorsel: 'gorsel1.jpg' } },
    { params: { kategori: 'haber', baslik: 'gundem', yayinci: 'yazar2', metin: 'metin2', gorsel: 'gorsel2.jpg' } },
    // Daha fazla popüler içerik ekleyebilirsiniz
  ];

  return {
    paths,
    fallback: 'blocking', // Bu, eksik sayfaların istek üzerine oluşturulmasını sağlar
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params ile veritabanından veya API'den gerekli verileri alın
  const { kategori, baslik, yayinci, metin, gorsel } = params as {
    kategori: string;
    baslik: string;
    yayinci: string;
    metin: string;
    gorsel: string;
  };

  // Veritabanı veya API'den alınan verilerle sayfa oluşturma
  return {
    props: {
      params: {
        kategori,
        baslik,
        yayinci,
        metin,
        gorsel,
      },
    },
    revalidate: 10, // Sayfa her 10 saniyede bir yeniden oluşturulacak
  };
};

export default Page;
//          <img src={gorselUri} alt="deniz" className='rounded-2xl group-hover:scale-110 max-h-full h-full' />
