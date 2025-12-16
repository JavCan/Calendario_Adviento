import { useState } from 'react';
import { AdventCalendar } from './components/AdventCalendar.tsx';

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdventCalendar />
    </div>
  );
}
