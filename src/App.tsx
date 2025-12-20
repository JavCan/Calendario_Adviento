import { AdventCalendar } from './components/AdventCalendar'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="min-h-screen bg-[#1a0f1b] relative">
      <Snowfall 
        color="#ffffff"
        snowflakeCount={150}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 50, 
          pointerEvents: 'none' 
        }}
      />
      <main className="container mx-auto py-10 px-4">
        <AdventCalendar />
      </main>
    </div>
  )
}

export default App