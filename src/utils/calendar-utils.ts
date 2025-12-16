// Días del calendario real de diciembre
const START_ADVENT_DAY = 15; // El regalo 1 abre el 15 de diciembre

/**
 * Mapea el número del regalo (1-10) al día real de diciembre (15-24).
 * @param giftNumber El número del regalo (1 a 10).
 * @returns El día de diciembre correspondiente (15 a 24).
 */
const mapGiftToAdventDay = (giftNumber: number): number => {
  // giftNumber 1 -> 15-1+1 = 15
  // giftNumber 2 -> 15-1+2 = 16
  return START_ADVENT_DAY - 1 + giftNumber; 
};

/**
 * Obtiene el día actual del mes, asegurando que sea diciembre.
 * @returns El día actual de diciembre (1-31), o 0 si no es diciembre.
 */
const getCurrentDecemberDay = (): number => {
  const today = new Date();
  
  // getMonth() devuelve 11 para diciembre.
  if (today.getMonth() !== 11) {
    return 0; // No es diciembre
  }
  return today.getDate(); // Día del mes
};

/**
 * Verifica si un regalo/día específico es abrible.
 *
 * @param giftNumber El número del regalo (1-10).
 * @returns true si el regalo se puede abrir hoy (el día ha llegado o pasado), false en caso contrario.
 */
export const isDayOpenable = (giftNumber: number): boolean => {
  // Aseguramos que el ID del regalo sea válido (1 a 10)
  if (giftNumber < 1 || giftNumber > 10) {
    return false; 
  }
  
  // 1. Obtener el día de diciembre que corresponde a este regalo
  const adventDay = mapGiftToAdventDay(giftNumber);
  
  // 2. Obtener la fecha actual (día de diciembre)
  const currentDay = getCurrentDecemberDay();
  
  // 3. Debe ser diciembre y el día real de diciembre debe haber llegado o pasado
  return currentDay !== 0 && adventDay <= currentDay;
};