import { createContext, useRef, useState } from 'react'
import { AcousticGuitar } from './components/guitar'

import './App.css'
import { Audios } from './components/audio'

// const client = new w3cwebsocket("ws://localhost:8025/processing");
export const InteractiveWallContext = createContext()
function App() {
  const [isTurnedOn, setIsTurnedOn] = useState(true)

  const currentBeatIndex = useRef(-1)
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
        currentBeatIndex,
        currentCelloIndex,
        currentGuitarIndex,
        currentPianoIndex,
        currentSaxoIndex,
        currentScratchIndex,
        currentShakerIndex,
      }}
    >
      <Audios>
        <AcousticGuitar />
      </Audios>
    </InteractiveWallContext.Provider>
  )
}

export default App
