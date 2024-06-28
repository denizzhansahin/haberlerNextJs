import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import ImageCard from '@/app/components/ImageCard';
import Link from 'next/link';
import { RootState, AppDispatch } from '../../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { VeriGetir2 } from '../../../../redux/veriler';

interface Item {
    baslik: string;
    kategori: string;
    tarih: string;
    gorsel: string;
    metin: string;
    yayinci_yazar: string;
  }

interface PageProps {
  params: {
    kategori: string;
  };
}

const HaberListesi: React.FC<{ veri: Item[] }> = ({ veri }) => {
  const [filteredItems, setFilteredItems] = useState<Item[]>(veri);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (veri.length === 0) {
      dispatch(VeriGetir2());
    } else {
      console.log("Veri var:", veri);
      // Eğer kategori varsa filtrele, yoksa tüm veriyi göster
      const bilgi = veri;
      setFilteredItems(bilgi);
    }
  }, [dispatch, veri]);

  return (
    <div className="">
      <div className="m-1 columns-sm gap-1">
        {filteredItems.map((doc, index) => (
          <Link key={index} href={`/sayfalar/haberDetay/${doc.kategori}/${doc.baslik}/${doc.yayinci_yazar}/${doc.metin}`}>
            <ImageCard key={index} yazi={doc.baslik} kategori={doc.kategori} imgSrc={doc.gorsel} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { kategori } = params as { kategori: string };
  // Burada `kategori`'ye göre veri çekme işlemini yapın (örneğin API çağrısı yapın)
  const veri: Item[] = []; // Gerçek veri çekme mantığınıza göre düzenleyin

  return {
    props: {
      veri,
    },
  };
};

export default HaberListesi;
