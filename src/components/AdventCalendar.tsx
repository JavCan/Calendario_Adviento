import { useState } from 'react';
import { GiftBox } from './GiftBox';

interface Gift {
  id: number;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'green' | 'gold' | 'blue';
  message: string;
}

const gifts: Gift[] = [
  { id: 1, size: 'small', color: 'green', message: 'Cada día contigo es un regalo especial' },
  { id: 2, size: 'large', color: 'red', message: 'Tu sonrisa ilumina mis días' },
  { id: 3, size: 'small', color: 'gold', message: 'Gracias por estar a mi lado' },
  { id: 4, size: 'medium', color: 'red', message: 'Eres mi persona favorita' },
  { id: 5, size: 'small', color: 'red', message: 'Contigo todo es mejor' },
  { id: 6, size: 'large', color: 'gold', message: 'Me encanta compartir momentos contigo' },
  { id: 7, size: 'small', color: 'green', message: 'Eres increíble, no lo olvides' },
  { id: 8, size: 'medium', color: 'green', message: 'Cada momento juntos es valioso' },
  { id: 9, size: 'small', color: 'blue', message: 'Tu compañía es mi lugar favorito' },
  { id: 10, size: 'large', color: 'blue', message: 'Que este sea un diciembre lleno de buenos momentos juntos' },
];

export function AdventCalendar() {
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set());

  const handleGiftOpen = (id: number) => {
    setOpenedGifts(prev => new Set([...prev, id]));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-[#f4e4d7] mb-2 pixel-text text-4xl md:text-5xl" style={{ 
          textShadow: '4px 4px 0px #1a0f1b',
          imageRendering: 'pixelated'
        }}>
          Calendario de Adviento
        </h1>
        <p className="text-[#d4a574] pixel-text text-lg md:text-xl" style={{ 
          textShadow: '2px 2px 0px #1a0f1b'
        }}>
          10 días, 10 sorpresas
        </p>
      </div>

      {/* Custom grid layout similar to the image */}
      <div className="grid grid-cols-7 gap-4 max-w-5xl mx-auto p-4" style={{ gridAutoRows: '180px' }}>
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

      <div className="mt-8 text-center">
        <p className="text-[#d4a574] pixel-text" style={{ 
          textShadow: '2px 2px 0px #1a0f1b',
          fontSize: '14px'
        }}>
          {openedGifts.size === 0 && 'Haz clic en los regalos para abrirlos'}
          {openedGifts.size > 0 && openedGifts.size < 10 && `${openedGifts.size} de 10 abiertos`}
          {openedGifts.size === 10 && '¡Todos los regalos abiertos! 💝'}
        </p>
      </div>
    </div>
  );
}