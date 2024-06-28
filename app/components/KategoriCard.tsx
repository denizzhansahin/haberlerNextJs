import React from 'react';
import Link from 'next/link';

interface KategoriCardProps {
    isim: string;
    icon: React.ReactNode; // veya ikonun tipini belirleyen başka bir tür
    yol: string;
    gorsel:React.ReactNode;
}

import E from "../data/TR-TR.png";
import Image from 'next/image';


const KategoriCard: React.FC<KategoriCardProps> = ({ isim, icon, yol , gorsel}) => {
    return (
        <Link href={`${yol}`}>
            <div className='relative ml-auto mr-auto mb-2 overflow-hidden rounded-2xl shadow-lg group box-border p-1 h-96 bg-sky-600 hover:bg-black'>
            <div className='flex flex-col items-center  h-full'>
                    {icon?(icon):(
                        <Image  className='object-contain m-8' width={300} height={300} alt="deniz" src={E} />
                        
                    )}
                    <div className='absolute  flex items-end'>
                        <div className='p-4 w-96 text-white text-center'>
                            <h3 className="text-3xl font-bold mb-2 text-center">{isim}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default KategoriCard;
