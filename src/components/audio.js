// import "./style.css";
import { useContext, useEffect, useRef } from 'react'
// import { w3cwebsocket } from "websocket";
import { Howl } from 'howler'

import beat1 from '../assets/audio/beats/beat-1.mp3'
import beat2 from '../assets/audio/beats/beat-2.mp3'
import beat3 from '../assets/audio/beats/beat-3.mp3'
import beat4 from '../assets/audio/beats/beat-4.mp3'
import beat5 from '../assets/audio/beats/beat-5.mp3'
import beat6 from '../assets/audio/beats/beat-6.mp3'
import beat7 from '../assets/audio/beats/beat-7.mp3'
import beat8 from '../assets/audio/beats/beat-8.mp3'

import cell1 from '../assets/audio/cello/cello-1.mp3'
import cell2 from '../assets/audio/cello/cello-2.mp3'
import cell3 from '../assets/audio/cello/cello-3.mp3'
import cell4 from '../assets/audio/cello/cello-4.mp3'

import guitar1 from '../assets/audio/guitar/guitar-1.mp3'
import guitar2 from '../assets/audio/guitar/guitar-2.mp3'
import guitar3 from '../assets/audio/guitar/guitar-3.mp3'
import guitar4 from '../assets/audio/guitar/guitar-4.mp3'
import guitar5 from '../assets/audio/guitar/guitar-5.mp3'
import guitar6 from '../assets/audio/guitar/guitar-6.mp3'

// import organ1 from '../assets/audio/organs/organ-1.mp3'
// import organ2 from '../assets/audio/organs/organ-2.mp3'
// import organ3 from '../assets/audio/organs/organ-3.mp3'
// import organ4 from '../assets/audio/organs/organ-4.mp3'
// import organ5 from '../assets/audio/organs/organ-5.mp3'
// import organ6 from '../assets/audio/organs/organ-6.mp3'
// import organ7 from '../assets/audio/organs/organ-7.mp3'
// import organ8 from '../assets/audio/organs/organ-8.mp3'
// import organ9 from '../assets/audio/organs/organ-9.mp3'

import piano1 from '../assets/audio/piano/piano-1.mp3'
import piano2 from '../assets/audio/piano/piano-2.mp3'
import piano3 from '../assets/audio/piano/piano-3.mp3'
import piano4 from '../assets/audio/piano/piano-4.mp3'
import piano5 from '../assets/audio/piano/piano-5.mp3'
import piano6 from '../assets/audio/piano/piano-6.mp3'
import piano7 from '../assets/audio/piano/piano-7.mp3'
import piano8 from '../assets/audio/piano/piano-8.mp3'
import piano9 from '../assets/audio/piano/piano-9.mp3'

import saxo1 from '../assets/audio/saxos/saxo-1.mp3'
import saxo2 from '../assets/audio/saxos/saxo-2.mp3'
import saxo3 from '../assets/audio/saxos/saxo-3.mp3'
import saxo4 from '../assets/audio/saxos/saxo-4.mp3'
import saxo5 from '../assets/audio/saxos/saxo-5.mp3'
import saxo6 from '../assets/audio/saxos/saxo-6.mp3'

import scratch1 from '../assets/audio/scratch/scratch-1.mp3'
import scratch2 from '../assets/audio/scratch/scratch-2.mp3'
import scratch3 from '../assets/audio/scratch/scratch-3.mp3'
import scratch4 from '../assets/audio/scratch/scratch-4.mp3'

import shaker1 from '../assets/audio/shakers/shaker-1.mp3'
import shaker2 from '../assets/audio/shakers/shaker-2.mp3'
import shaker3 from '../assets/audio/shakers/shaker-3.mp3'
import { InteractiveWallContext } from '../App'
import { SENSOR_ENUMS } from '../enums'

import { w3cwebsocket } from 'websocket'
const client = new w3cwebsocket('ws://localhost:8025/processing')

const tempo = 85
const timeSnap = (60 / tempo) * 1000 * 8 // Assuming a 4/4 time signature

const beats = [
  new Howl({ src: beat1, loop: true, volume: 2.0 }),
  new Howl({ src: beat2, loop: true, volume: 1.5 }),
  new Howl({ src: beat3, loop: true, volume: 1.5 }),
  new Howl({ src: beat4, loop: true, volume: 1.5 }),
  new Howl({ src: beat5, loop: true, volume: 1.5 }),
  new Howl({ src: beat6, loop: true, volume: 1.5 }),
  new Howl({ src: beat7, loop: true, volume: 1.5 }),
  new Howl({ src: beat8, loop: true, volume: 1.5 }),
]

const cellos = [
  new Howl({ src: cell1, loop: true }),
  // new Howl({ src: cell2, loop: true }),
  // new Howl({ src: cell3, loop: true }),
  // new Howl({ src: cell4, loop: true }),
]

const guitars = [
  new Howl({ src: guitar5, loop: true }),
  new Howl({ src: guitar6, loop: true }),
  new Howl({ src: guitar3, loop: true }),
  new Howl({ src: guitar4, loop: true }),
  new Howl({ src: guitar1, loop: true }),
  new Howl({ src: guitar2, loop: true }),
]

const pianos = [
  new Howl({ src: piano1, loop: true }),
  new Howl({ src: piano2, loop: true }),
  new Howl({ src: piano3, loop: true }),
  new Howl({ src: piano4, loop: true }),
  new Howl({ src: piano5, loop: true }),
  new Howl({ src: piano6, loop: true }),
  new Howl({ src: piano7, loop: true }),
  new Howl({ src: piano8, loop: true }),
  new Howl({ src: piano9, loop: true }),
]

const saxos = [
  new Howl({ src: saxo1, loop: true }),
  // new Howl({ src: saxo2, loop: true }),
  // new Howl({ src: saxo3, loop: true }),
  // new Howl({ src: saxo4, loop: true }),
  // new Howl({ src: saxo5, loop: true }),
  // new Howl({ src: saxo6, loop: true }),
]

const scratches = [
  new Howl({ src: scratch1 }),
  // new Howl({ src: scratch2 }),
  // new Howl({ src: scratch3 }),
  // new Howl({ src: scratch4 }),
]

const shakers = [
  // new Howl({ src: shaker1, loop: true }),
  // new Howl({ src: shaker2, loop: true }),
  // new Howl({ src: shaker3, loop: true }),
]

export const Audios = ({ children }) => {
  const currentBeatIndex = useRef(-1)
  const currentCelloIndex = useRef(-1)
  const currentGuitarIndex = useRef(-1)
  const currentPianoIndex = useRef(-1)
  const currentSaxoIndex = useRef(-1)
  const currentScratchIndex = useRef(-1)
  const currentShakerIndex = useRef(-1)

  const { setOngoingInstruments, trigger, setTrigger, setScale, scale } = useContext(InteractiveWallContext)

  useEffect(() => {
    console.log(client)
    client.onopen = () => {
      console.log('websocket client connected')
    }
    client.onmessage = (message) => {
      const sensorNum = JSON.parse(message.data)
      console.log(`Sensor ${sensorNum} touched`)
      if (sensorNum === SENSOR_ENUMS.StopAll) {
        setOngoingInstruments([])
        currentBeatIndex.current = -1
        currentCelloIndex.current = -1
        currentGuitarIndex.current = -1
        currentPianoIndex.current = -1
        currentSaxoIndex.current = -1
        currentScratchIndex.current = -1
        currentShakerIndex.current = -1
      } else {
        switch (sensorNum) {
          case 0:
            currentGuitarIndex.current =
              guitars.length - 1 === currentGuitarIndex.current ? -1 : currentGuitarIndex.current + 1
            console.log('guitar activated')
            console.log('currentGuitarIndex.current', currentGuitarIndex.current)
            console.log('currentBeatIndex.current', currentBeatIndex.current)
            break
          case 5:
            console.log('beat activated')
            currentBeatIndex.current = beats.length - 1 === currentBeatIndex.current ? -1 : currentBeatIndex.current + 1
            break
          case SENSOR_ENUMS.Piano:
            currentPianoIndex.current =
              pianos.length - 1 === currentPianoIndex.current ? -1 : currentPianoIndex.current + 1
            break
          default:
            break
        }
        setOngoingInstruments((c) => {
          if (c.length === 0) setTrigger(new Date())
          return [...c.filter((c) => c !== sensorNum), sensorNum]
        })
      }
    }
    // }, [])

    // useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('setInterval')
      setTrigger(new Date())
    }, timeSnap)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    console.log(currentBeatIndex.current)
    if (beats.length > 0 && currentBeatIndex.current > -1) {
      beats.forEach((beat, idx) => {
        beat = new Howl({ src: beat1, loop: true, volume: 2.0 })
        if (beat.state() === 'loaded') {
          console.log('beat loop', currentBeatIndex.current)
          if (idx === currentBeatIndex.current) !beat.playing() && beat.play()
          else beat.playing() && beat.stop()
        }
      })
    }

    if (cellos.length > 0) {
      cellos.forEach((cello, idx) => {
        if (cello.state() === 'loaded') {
          if (idx === currentCelloIndex.current) !cello.playing() && cello.play()
          else cello.playing() && cello.stop()
        }
      })
    }

    if (guitars.length > 0) {
      guitars.forEach((guitar, idx) => {
        if (guitar.state() === 'loaded') {
          if (idx === currentGuitarIndex.current) !guitar.playing() && guitar.play()
          else guitar.playing() && guitar.stop()
        }
      })
    }

    if (pianos.length > 0) {
      pianos.forEach((piano, idx) => {
        if (piano.state() === 'loaded') {
          if (idx === currentPianoIndex.current) !piano.playing() && piano.play()
          else piano.playing() && piano.stop()
        }
      })
    }

    if (saxos.length > 0) {
      saxos.forEach((saxo, idx) => {
        if (saxo.state() === 'loaded') {
          if (idx === currentSaxoIndex.current) !saxo.playing() && saxo.play()
          else saxo.playing() && saxo.stop()
        }
      })
    }

    if (scratches.length > 0) {
      scratches.forEach((scratch, idx) => {
        if (scratch.state() === 'loaded') {
          if (idx === currentScratchIndex.current) !scratch.playing() && scratch.play()
          else scratch.playing() && scratch.stop()
        }
      })
    }

    if (shakers.length > 0) {
      shakers.forEach((shaker, idx) => {
        if (shaker.state() === 'loaded') {
          if (idx === currentShakerIndex.current) !shaker.playing() && shaker.play()
          else shaker.playing() && shaker.stop()
        }
      })
    }
  }, [trigger])

  // const switchToNextSample = () => {
  //   console.log("switched");
  //   const previousIndex = currentSampleIndex.current;
  //   currentSampleIndex.current = (previousIndex + 1) % howls.current.length;

  //   howls.current[previousIndex].beat.seek(0);
  //   howls.current[previousIndex].beat.pause(
  //     howls.current[previousIndex].howlId
  //   );
  //   howls.current[currentSampleIndex.current].beat.play();
  //   clearInterval(howls.current[previousIndex].loopInterval);
  // };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            if (scale === 'scale(1,1)') {
              setScale('scale(1.05,1.05)')
            } else {
              setScale('scale(1,1)')
            }
            console.log('bbb')
            setOngoingInstruments((c) => {
              if (c.length === 0) setTrigger(new Date())
              return [...c.filter((c) => c !== SENSOR_ENUMS.Drum), SENSOR_ENUMS.Drum]
            })

            currentBeatIndex.current = beats.length - 1 === currentBeatIndex.current ? -1 : currentBeatIndex.current + 1
            // currentGuitarIndex.current =
            //   guitars.length - 1 === currentGuitarIndex.current ? -1 : currentGuitarIndex.current + 1
          }}
        >
          change Beat
        </button>

        <button
          onClick={() => {
            currentCelloIndex.current =
              cellos.length - 1 === currentCelloIndex.current ? -1 : currentCelloIndex.current + 1
          }}
        >
          change Cello
        </button>

        <button
          onClick={() => {
            //Below code is testing purpose
            setOngoingInstruments((c) => {
              if (c.length === 0) setTrigger(new Date())
              return [...c.filter((c) => c !== SENSOR_ENUMS.Guitar), SENSOR_ENUMS.Guitar]
            })

            currentGuitarIndex.current =
              guitars.length - 1 === currentGuitarIndex.current ? -1 : currentGuitarIndex.current + 1
            setOngoingInstruments((c) => {
              return [...c.filter((c) => c !== SENSOR_ENUMS.Guitar), SENSOR_ENUMS.Guitar]
            })
          }}
        >
          change Guitar
        </button>

        <button
          onClick={() => {
            //Below code is testing purpose
            setOngoingInstruments((c) => {
              if (c.length === 0) setTrigger(new Date())
              return [...c.filter((c) => c !== SENSOR_ENUMS.Piano), SENSOR_ENUMS.Piano]
            })
            currentPianoIndex.current =
              pianos.length - 1 === currentPianoIndex.current ? -1 : currentPianoIndex.current + 1
            setOngoingInstruments((c) => {
              return [...c.filter((c) => c !== SENSOR_ENUMS.Piano), SENSOR_ENUMS.Piano]
            })
          }}
        >
          change Piano
        </button>

        <button
          onClick={() => {
            currentSaxoIndex.current = saxos.length - 1 === currentSaxoIndex.current ? -1 : currentSaxoIndex.current + 1
          }}
        >
          change Saxo
        </button>

        <button
          onClick={() => {
            currentScratchIndex.current =
              scratches.length - 1 === currentScratchIndex.current ? -1 : currentScratchIndex.current + 1
          }}
        >
          change scratch
        </button>

        <button
          onClick={() => {
            currentShakerIndex.current =
              shakers.length - 1 === currentShakerIndex.current ? -1 : currentShakerIndex.current + 1
          }}
        >
          change Shaker
        </button>
      </div>
      {children}
    </div>
  )
}
