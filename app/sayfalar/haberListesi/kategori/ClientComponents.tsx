"use client"


import { useState, useEffect } from 'react'
import ImageCard from '@/app/components/ImageCard'

import { RootState, AppDispatch } from '../../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {  VeriGetir2 } from '../../../../redux/veriler'
import Link from 'next/link'

interface Item {
  baslik: string;
  kategori: string;
  tarih: string;
  gorsel: string;
  metin: string;
  yayinci_yazar: string;
}



interface ClientComponentProps {
  kategori: string | null;
}


  const ClientComponent: React.FC<ClientComponentProps> = ({ kategori }) => {
    const safeKategori: string = kategori ?? "defaultKategori";


    const decodedKategori = decodeURIComponent(safeKategori);

  function filterByCategory(items: Item[], kategori: string): Item[] {
    return items.filter(item => item.kategori === kategori);
  }



  const dispatch: AppDispatch = useDispatch()
  const { veri, status, error } = useSelector((state: RootState) => state.counter)

  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    if (veri.length == 0) {
      dispatch(VeriGetir2())
    } else {
      console.log("Veri var")
      //console.log(veri.map((doc)=>doc))
      //veri.map((doc)=>doc.kategori=="Spor"&& console.log(doc))
      //veri.map((doc)=>doc.kategori==kategori&& console.log(kategori))

      //console.log(kategori.length)
      //console.log(kategori)
      //console.log(yeniDeger.length)
      //console.log(yeniDeger)
      //const filteredItems = filterByCategory(veri, yeniDeger);
      //console.log(filteredItems);
      //console.log(veri[2]["baslik"])

      const bilgi = kategori ? filterByCategory(veri, decodedKategori) : veri;
      setFilteredItems(bilgi);
      console.log(filteredItems)
      console.log(filteredItems)
    }
  },[decodedKategori, dispatch, veri])




  
  return (
    <div className="">
      <div className="m-1 columns-sm gap-1">
        {

          kategori ? (
            filteredItems.map((doc) => {
              function splitStringWithSubstring(input: string, index: number): [string, string] | null {
                if (index < 0 || index > input.length) {
                    return null; // Geçersiz indeks durumunda null döner
                }
                let firstPart = input.substring(0, index);
                let secondPart = input.substring(index);
                
                return [firstPart, secondPart];
            }
            
            // Örnek kullanım
            let str = "Bu bir örnek cümle.";
            let result = splitStringWithSubstring(doc.gorsel, 9);
            
            if (result) {
                console.log(result[0]); // Output: "Bu bir "
                console.log(result[1]); // Output: "örnek cümle."
            }


            if (!result) {
              console.error(`Failed to split string for ${doc.gorsel}`);
              return null; // Handle error case gracefully or log an error
            }
              return (
                <Link key={5} href={`/sayfalar/haberDetay?kategori=${doc.kategori}&baslik=${doc.baslik}&yayinci=${doc.yayinci_yazar}&metin=${doc.metin}&gorsel=${result[1]}`}>
                  <ImageCard key={6} yazi={doc.baslik} kategori={doc.kategori} imgSrc={doc.gorsel} />

                </Link>
              )
            })
          ) : (
            veri.map((doc) => {
              function splitStringWithSubstring(input: string, index: number): [string, string] | null {
                if (index < 0 || index > input.length) {
                    return null; // Geçersiz indeks durumunda null döner
                }

                let firstPart = input.substring(0, index);
                let secondPart = input.substring(index);
                return [firstPart, secondPart];
            }
            let str = "Bu bir örnek cümle.";
            let result = splitStringWithSubstring(doc.gorsel, 9);
          
            if (result) {
                console.log(result[0]); // Output: "Bu bir "
                console.log(result[1]); // Output: "örnek cümle."
            }
            if (!result) {
              console.error(`Failed to split string for ${doc.gorsel}`);
              return null; // Handle error case gracefully or log an error
            }
              return (
                <Link key={5} href={`/sayfalar/haberDetay?kategori=${doc.kategori}&baslik=${doc.baslik}&yayinci=${doc.yayinci_yazar}&metin=${doc.metin}&gorsel=${result[1]}`}>
                  <ImageCard key={6} yazi={doc.baslik} kategori={doc.kategori} imgSrc={doc.gorsel} />

                </Link>
              )
            })
          )
        }
      </div>
    </div>
  )
}

export default ClientComponent;
