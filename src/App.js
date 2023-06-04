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
import StopButton from './components/stop-button'

export const InteractiveWallContext = createContext()
function App() {
  const [trigger, setTrigger] = useState(null)
  const [ongoingInstruments, setOngoingInstruments] = useState([])

  return (
    <InteractiveWallContext.Provider
      value={{
        ongoingInstruments,
        setOngoingInstruments,
        trigger,
        setTrigger,
      }}
    >
      <Audios>
        <div className="App" style={{ position: 'relative' }}>
          {/* <button onClick={() => setOngoingInstruments([])}>Stop all</button> */}
          <Guitar x={50} y={100} />
          <Scratch x={240} y={200} />
          <Piano x={600} y={100} />
          <Saxophone x={320} y={500} />
          <Drum x={630} y={220} />
          <Cello x={1000} y={-200} />
          <Shaker />
          <StopButton x={750} y={550} />
        </div>
      </Audios>
    </InteractiveWallContext.Provider>
  )
}

export default App
