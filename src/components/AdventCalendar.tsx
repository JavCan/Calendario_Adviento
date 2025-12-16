import { useState } from 'react';
import { GiftBox } from './GiftBox';

import gift1 from '../assets/1.png';
import gift2 from '../assets/2.png';
/*import gift3 from '../assets/3.png';
import gift4 from '../assets/4.png';
import gift5 from '../assets/5.png';
import gift6 from '../assets/6.png';
import gift7 from '../assets/7.png';
import gift8 from '../assets/8.png';
import gift9 from '../assets/9.png';
import gift10 from '../assets/10.png'; */

interface Gift {
  id: number;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'green' | 'gold' | 'blue';
  imagePath: string;
}

const gifts: Gift[] = [
  { id: 1, size: 'small', color: 'green', imagePath: gift1 },
  { id: 2, size: 'large', color: 'red', imagePath: gift2 },
  { id: 3, size: 'small', color: 'gold', imagePath: '../assets/3.png' },
  { id: 4, size: 'medium', color: 'red', imagePath: '../assets/4.png' },
  { id: 5, size: 'small', color: 'red', imagePath: '../assets/5.png' },
  { id: 6, size: 'large', color: 'gold', imagePath: '../assets/6.png' },
  { id: 7, size: 'small', color: 'green', imagePath: '../assets/7.png' },
  { id: 8, size: 'medium', color: 'green', imagePath: '../assets/8.png' },
  { id: 9, size: 'small', color: 'blue', imagePath: '../assets/9.png' },
  { id: 10, size: 'large', color: 'blue', imagePath: '../assets/10.png' },
];

export function AdventCalendar() {
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());

  const handleGiftOpen = (id: number) => {
    setOpenedGifts(prev => new Set([...prev, id]));
  };
  
  // --- Cálculo del progreso ---
  const openedCount = openedGifts.size;
  const totalGifts = gifts.length; // 10 regalos
  const progressPercentage = (openedCount / totalGifts) * 100;

  return (
    <div className="max-w-full mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-[#f4e4d7] mb-5 pixel-text text-4xl md:text-7xl" style={{ 
          textShadow: '4px 4px 0px #1a0f1b',
          imageRendering: 'pixelated'
        }}>
          Calendario de Adviento
        </h1>
        <p className="text-[#d4a574] pixel-text text-lg md:text-3xl" style={{ 
          textShadow: '2px 2px 0px #1a0f1b'
        }}>
          para ti mi Danna Hermosa :3
        </p>
      </div>

      {/* Custom grid layout similar to the image */}
      <div className="grid grid-cols-7 gap-4 w-full mx-auto" style={{ gridAutoRows: '200px' }}>
        <div><GiftBox gift={gifts[0]} isOpened={openedGifts.has(gifts[0].id)} onOpen={() => handleGiftOpen(gifts[0].id)} /></div>
        <div className="row-span-2 col-start-1 row-start-2"><GiftBox gift={gifts[1]} isOpened={openedGifts.has(gifts[1].id)} onOpen={() => handleGiftOpen(gifts[1].id)} /></div>
        <div className="col-span-2 col-start-1 row-start-4"><GiftBox gift={gifts[2]} isOpened={openedGifts.has(gifts[2].id)} onOpen={() => handleGiftOpen(gifts[2].id)} /></div>
        <div className="row-span-3 col-start-2 row-start-1"><GiftBox gift={gifts[3]} isOpened={openedGifts.has(gifts[3].id)} onOpen={() => handleGiftOpen(gifts[3].id)} /></div>
        <div className="col-span-2 col-start-3 row-start-1"><GiftBox gift={gifts[4]} isOpened={openedGifts.has(gifts[4].id)} onOpen={() => handleGiftOpen(gifts[4].id)} /></div>
        <div className="row-span-3 col-start-3 row-start-2"><GiftBox gift={gifts[5]} isOpened={openedGifts.has(gifts[5].id)} onOpen={() => handleGiftOpen(gifts[5].id)} /></div>
        <div className="col-span-4 col-start-4 row-start-4"><GiftBox gift={gifts[6]} isOpened={openedGifts.has(gifts[6].id)} onOpen={() => handleGiftOpen(gifts[6].id)} /></div>
        <div className="col-span-2 row-span-2 col-start-4 row-start-2"><GiftBox gift={gifts[7]} isOpened={openedGifts.has(gifts[7].id)} onOpen={() => handleGiftOpen(gifts[7].id)} /></div>
        <div className="col-start-5 row-start-1"><GiftBox gift={gifts[8]} isOpened={openedGifts.has(gifts[8].id)} onOpen={() => handleGiftOpen(gifts[8].id)} /></div>
        <div className="col-span-2 row-span-3 col-start-6 row-start-1"><GiftBox gift={gifts[9]} isOpened={openedGifts.has(gifts[9].id)} onOpen={() => handleGiftOpen(gifts[9].id)} /></div>
      </div>

      {/* Barra de progreso (Reemplaza el texto) */}
      <div className="mt-5 text-center">
        {/* Texto de estado (informativo) */}
        <p className="text-[#d4a574] pixel-text mb-2" style={{ 
          textShadow: '2px 2px 0px #1a0f1b',
          fontSize: '14px'
        }}>
          {openedCount === 0 && 'Clickea los regalos para abrirlos mi amor :3'}
          {openedCount > 0 && openedCount < 10 && `${openedCount} de 10 abiertos`}
          {openedCount === 10 && '¡TE AMO, FELIZ NOCHEBUENA! 💝'}
        </p>
        
        {/* Barra de progreso delgada */}
        <div className="w-full mx-auto h-3 border-2 border-[#1a0f1b] bg-[#4a3a4b] rounded-full overflow-hidden shadow-lg">
          <div 
            className="h-full bg-gradient-to-r from-[#d4a574] to-[#c59e3a]" 
            style={{ 
              width: `${progressPercentage}%`,
              transition: 'width 0.5s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}