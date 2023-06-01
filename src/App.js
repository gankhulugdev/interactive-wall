import { createContext, useRef, useState } from 'react'
import { Guitar } from './components/guitar'

import './App.css'
import { Audios } from './components/audio'
import { Scratch } from './components/scratch'
import { Saxophone } from './components/saxophone'
import { Drum } from './components/drum'
import { Shaker } from './components/shaker'
import { Piano } from './components/piano'
import { Cello } from './components/cello'

// const client = new w3cwebsocket("ws://localhost:8025/processing");
export const InteractiveWallContext = createContext()
function App() {
  const [isTurnedOn, setIsTurnedOn] = useState(true)

  const currentDrumIndex = useRef(-1)
  const currentCelloIndex = useRef(-1)
  const currentGuitarIndex = useRef(-1)
  const currentPianoIndex = useRef(-1)
  const currentSaxoIndex = useRef(-1)
  const currentScratchIndex = useRef(-1)
  const currentShakerIndex = useRef(-1)

  return (
    <InteractiveWallContext.Provider
      value={{
        isTurnedOn,
        setIsTurnedOn,
        currentDrumIndex,
        currentCelloIndex,
        currentGuitarIndex,
        currentPianoIndex,
        currentSaxoIndex,
        currentScratchIndex,
        currentShakerIndex,
      }}
    >
      <Audios>
        <div style={{ position: 'relative' }}>
          <Guitar x={100} y={100} />
          <Scratch x={100} y={300} />
          <Drum x={100} y={500} />
          <Piano x={100} y={900} />
          <Saxophone x={100} y={100} />
          <Shaker x={100} y={100} />
          <Cello x={500} y={500}/>
        </div>
      </Audios>
    </InteractiveWallContext.Provider>
  )
}

export default App
