import { useState } from 'react';
import { AdventCalendar } from './components/AdventCalendar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2d1b2e] p-4 md:p-8">
      <AdventCalendar />
    </div>
  );
}
