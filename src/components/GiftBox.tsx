import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Gift {
  id: number;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'green' | 'gold' | 'blue';
  message: string;
}

interface GiftBoxProps {
  gift: Gift;
  isOpened: boolean;
  onOpen: () => void;
}

const colorSchemes = {
  red: {
    box: '#a03a3a',
    boxDark: '#6b2727',
    ribbon: '#d4a574',
    ribbonDark: '#b08a5c'
  },
  green: {
    box: '#5a7a4a',
    boxDark: '#3d5232',
    ribbon: '#c94a4a',
    ribbonDark: '#a03838'
  },
  gold: {
    box: '#d4a574',
    boxDark: '#b08a5c',
    ribbon: '#a0503a',
    ribbonDark: '#7a3a2a'
  },
  blue: {
    box: '#4a6a8a',
    boxDark: '#325070',
    ribbon: '#f4e4d7',
    ribbonDark: '#d4c4b7'
  }
};

const sizeClasses = {
  small: 'aspect-square',
  medium: 'aspect-[1/1.5]',
  large: 'aspect-[2/1]'
};

export function GiftBox({ gift, isOpened, onOpen }: GiftBoxProps) {
  const [showMessage, setShowMessage] = useState(false);
  const colors = colorSchemes[gift.color];

  const handleClick = () => {
    if (!isOpened) {
      onOpen();
    }
  };

  return (
    <motion.div
      className="w-full h-full cursor-pointer relative pixel-box"
      onClick={handleClick}
      whileHover={{ scale: isOpened ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Gift Box */}
      <div className="w-full h-full relative" style={{
        background: `linear-gradient(135deg, ${colors.box} 0%, ${colors.boxDark} 100%)`,
        boxShadow: `
          inset -4px -4px 0px ${colors.boxDark},
          inset 4px 4px 0px ${colors.box},
          6px 6px 0px rgba(0, 0, 0, 0.3)
        `,
        border: `3px solid ${colors.boxDark}`,
        opacity: isOpened ? 0.95 : 1
      }}>
        
        {!isOpened ? (
          <>
            {/* Ribbon Horizontal */}
            <div className="absolute top-1/2 left-0 right-0 h-6 -translate-y-1/2" style={{
              background: `linear-gradient(180deg, ${colors.ribbon} 0%, ${colors.ribbonDark} 100%)`,
              boxShadow: `
                inset 0 -2px 0px ${colors.ribbonDark},
                inset 0 2px 0px ${colors.ribbon}
              `,
              border: `2px solid ${colors.ribbonDark}`
            }} />

            {/* Ribbon Vertical */}
            <div className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2" style={{
              background: `linear-gradient(90deg, ${colors.ribbon} 0%, ${colors.ribbonDark} 100%)`,
              boxShadow: `
                inset -2px 0 0px ${colors.ribbonDark},
                inset 2px 0 0px ${colors.ribbon}
              `,
              border: `2px solid ${colors.ribbonDark}`
            }} />

            {/* Bow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
              <div className="w-4 h-4" style={{
                background: colors.ribbon,
                border: `2px solid ${colors.ribbonDark}`,
                boxShadow: `2px 2px 0px ${colors.ribbonDark}`
              }} />
              <div className="w-4 h-4" style={{
                background: colors.ribbon,
                border: `2px solid ${colors.ribbonDark}`,
                boxShadow: `2px 2px 0px ${colors.ribbonDark}`
              }} />
            </div>

            {/* Day Number */}
            <div className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center" style={{
              background: '#f4e4d7',
              border: '3px solid #2d1b2e',
              boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.3)',
              imageRendering: 'pixelated'
            }}>
              <span className="pixel-text" style={{ 
                color: '#2d1b2e',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                {gift.id}
              </span>
            </div>
          </>
        ) : (
          /* Message inside the opened gift */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 p-4 flex flex-col items-center justify-center"
          >
            <div className="text-center">
              <div className="mb-3 text-3xl">💝</div>
              <p className="text-[#f4e4d7] pixel-text" style={{ 
                fontSize: gift.size === 'small' ? '11px' : gift.size === 'medium' ? '13px' : '14px',
                lineHeight: '1.5',
                textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)'
              }}>
                {gift.message}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}