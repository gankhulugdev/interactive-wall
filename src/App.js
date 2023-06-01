import { createContext, useEffect, useRef, useState } from 'react'
import { Guitar } from './components/guitar'
import './App.css'
import { Audios } from './components/audio'
import { Scratch } from './components/scratch'
import { Saxophone } from './components/saxophone'
import { Drum } from './components/drum'
import { Shaker } from './components/shaker'
import { Piano } from './components/piano'
import { Cello } from './components/cello'

export const InteractiveWallContext = createContext()
function App() {
  const [trigger, setTrigger] = useState(null)
  const [scale, setScale] = useState('scale(1,1)')
  const [ongoingInstruments, setOngoingInstruments] = useState([])

  return (
    <InteractiveWallContext.Provider
      value={{
        ongoingInstruments,
        setOngoingInstruments,
        trigger,
        setTrigger,
        setScale,
        scale,
      }}
    >
      <Audios>
        <div className="App" style={{ position: 'relative' }}>
          <button onClick={() => setOngoingInstruments([])}>Stop all</button>
          <Guitar x={100} y={100} />
          <Scratch x={350} y={100} />
          <Piano x={750} y={70} />
          <Saxophone x={350} y={400} />
          <Drum x={700} y={300} />
          <Cello x={1050} y={-200} />
          <Shaker />
        </div>
      </Audios>
    </InteractiveWallContext.Provider>
  )
}

export default App
