import { motion} from 'motion/react';
import { isDayOpenable } from '../utils/calendar-utils'; // Usar la extensión .ts es opcional aquí

interface Gift {
  id: number;
  size: 'small' | 'medium' | 'large';
  color: 'red' | 'green' | 'gold' | 'blue';
  imagePath: string;
}

interface GiftBoxProps {
  gift: Gift;
  isOpened: boolean;
  onOpen: () => void;
}

const colorSchemes = {
  red: {
    bg: '#9d5353',
    bgDark: '#7a3f3f',
    accent: '#e8d5c4'
  },
  green: {
    bg: '#7a9d8e',
    bgDark: '#5f7a6f',
    accent: '#e8d5c4'
  },
  gold: {
    bg: '#c9b8a0',
    bgDark: '#a89880',
    accent: '#9d5353'
  },
  blue: {
    bg: '#6b8090',
    bgDark: '#556570',
    accent: '#e8d5c4'
  }
};

const patterns = [
  'diagonal-stripes',
  'dots',
  'zigzag',
  'solid',
  'chevron',
  'stars',
  'waves',
  'grid',
  'solid',
  'diagonal-stripes'
];

const icons = ['🎄', '⭐', '🎅', '🎁', '🔔', '❄️', '🕯️', '🧦', '🍪', '☕'];

export function GiftBox({ gift, isOpened, onOpen }: GiftBoxProps) {
  const colors = colorSchemes[gift.color];
  const pattern = patterns[gift.id - 1];
  const icon = icons[gift.id - 1];

  // Determinar si el regalo está habilitado
    const isEnabled = isDayOpenable(gift.id);

const handleClick = () => {
    if (!isOpened) { 
      if (isEnabled) { // Solo si está habilitado
        onOpen();
      } else {
        alert(`¡Aún no es el día! Tienes que esperar.`);
      }
     }
   };

  return (
    <motion.div
      className={`w-full h-full relative pixel-box ${isEnabled ? 'cursor-pointer' : 'cursor-not-allowed disabled'}`}
      onClick={handleClick}
      whileHover={{ scale: (isOpened || isEnabled) ? 1.05 : 1 }}
      whileTap={{ scale: (isOpened || isEnabled) ? 0.95 : 1 }}
      style={{ 
        imageRendering: 'pixelated',
        // --- CAMBIO SOLICITADO AQUÍ ---
        opacity: isEnabled ? 1 : 0.5 
      }}
    >
      {/* Card */}
      <div className="w-full h-full relative overflow-hidden" style={{
        background: colors.bg,
        border: `4px solid ${colors.bgDark}`,
        boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.4)',
        borderRadius: '8px'
      }}>
        
        {!isOpened ? (
          <>
            {/* Pattern Background */}
            <div className="absolute inset-0" style={{ opacity: 0.3 }}>
              {pattern === 'diagonal-stripes' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    ${colors.bgDark},
                    ${colors.bgDark} 10px,
                    transparent 10px,
                    transparent 20px
                  )`
                }} />
              )}
              {pattern === 'dots' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle, ${colors.bgDark} 2px, transparent 2px)`,
                  backgroundSize: '20px 20px'
                }} />
              )}
              {pattern === 'zigzag' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(
                    135deg,
                    ${colors.bgDark} 0px,
                    ${colors.bgDark} 8px,
                    transparent 8px,
                    transparent 16px,
                    ${colors.bgDark} 16px
                  )`
                }} />
              )}
              {pattern === 'chevron' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    ${colors.bgDark},
                    ${colors.bgDark} 15px,
                    transparent 15px,
                    transparent 30px
                  )`
                }} />
              )}
              {pattern === 'stars' && (
                <div className="w-full h-full flex flex-wrap gap-4 p-2">
                  <span style={{ color: colors.bgDark, fontSize: '12px' }}>✦</span>
                  <span style={{ color: colors.bgDark, fontSize: '12px' }}>✦</span>
                  <span style={{ color: colors.bgDark, fontSize: '12px' }}>✦</span>
                  <span style={{ color: colors.bgDark, fontSize: '12px' }}>✦</span>
                </div>
              )}
              {pattern === 'waves' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    ${colors.bgDark} 0px,
                    transparent 5px,
                    transparent 10px,
                    ${colors.bgDark} 15px
                  )`
                }} />
              )}
              {pattern === 'grid' && (
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(${colors.bgDark} 2px, transparent 2px),
                    linear-gradient(90deg, ${colors.bgDark} 2px, transparent 2px)
                  `,
                  backgroundSize: '25px 25px'
                }} />
              )}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Bow at the top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-1">
                {/* Left bow */}
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: colors.accent,
                  border: `3px solid ${colors.bgDark}`,
                  borderRadius: '50% 50% 0 50%',
                  transform: 'rotate(-45deg)',
                  boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)'
                }} />
                
                {/* Center knot */}
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: colors.accent,
                  border: `3px solid ${colors.bgDark}`,
                  borderRadius: '50%',
                  boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)',
                  marginBottom: '-4px',
                  zIndex: 2
                }} />
                
                {/* Right bow */}
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: colors.accent,
                  border: `3px solid ${colors.bgDark}`,
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(45deg)',
                  boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)'
                }} />
              </div>

              {/* Ribbon vertical */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full" style={{
                width: '12px',
                background: `linear-gradient(90deg, ${colors.accent} 0%, ${colors.bgDark} 50%, ${colors.accent} 100%)`,
                opacity: 0.4,
                borderLeft: `2px solid ${colors.bgDark}`,
                borderRight: `2px solid ${colors.bgDark}`
              }} />
              
              {/* Icon */}
              <div className="mb-2 text-4xl relative z-10" style={{ 
                filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3))',
                opacity: 0.9
              }}>
                {icon}
              </div>
              
              {/* Day Number */}
              <div 
                className="pixel-text relative z-10" 
                style={{ 
                  color: colors.accent,
                  fontSize: '48px',
                  fontWeight: 'bold',
                  textShadow: `3px 3px 0px ${colors.bgDark}, 4px 4px 0px rgba(0, 0, 0, 0.3)`,
                  lineHeight: '1'
                }}
              >
                {gift.id}
              </div>

              {/* Small decorative stars */}
              {gift.id % 3 === 0 && (
                <div className="absolute top-2 right-2 text-xs z-10" style={{ color: colors.accent, opacity: 0.6 }}>
                  ✦ ✦
                </div>
              )}
            </div>
          </>
        ) : (
          /* Message inside the opened gift */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 p-0 flex flex-col items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bgDark} 100%)`
            }}
          >
            <div className="text-center">
              <p className="text-[#e8d5c4] pixel-text" style={{ 
                fontSize: gift.size === 'small' ? '11px' : gift.size === 'medium' ? '13px' : '14px',
                lineHeight: '1.5',
                textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)'
              }}>
                <img src={gift.imagePath} alt={`Gift ${gift.id}`} className="w-auto h-auto" />
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}