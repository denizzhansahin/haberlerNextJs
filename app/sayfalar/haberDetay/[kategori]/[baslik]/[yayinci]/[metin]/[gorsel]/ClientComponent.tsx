// app/sayfalar/haberDetay/[kategori]/[baslik]/[yayinci]/[metin]/[gorsel]/ClientComponent.tsx

"use client";

import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import app_firebase from "../../../../../../../../firebaseConfig";
import Image from 'next/image';

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

interface ClientComponentProps {
  decodedGorsel: string;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ decodedGorsel }) => {
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
  }, [decodedGorsel]);

  return (
    <Image
      src={gorselUri}
      alt="deniz"
      className='rounded-2xl group-hover:scale-110 max-h-full h-full'
      width={500}
      height={500}
    />
  );
};

export default ClientComponent;
