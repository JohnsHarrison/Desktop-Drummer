import './App.css';
import { useEffect } from 'react';
import DrumSet from './Components/DrumSet';
import Player from './Components/Player';

import Kick from './Assets/bassdrum.mp3';
import Crash from './Assets/crash.mp3'
import FloorTom from './Assets/floorTom.mp3'
import HiHatClosed from './Assets/hiHatClosed.mp3'
import HiHatOpen from './Assets/hiHatOpen.mp3'
import HiHatPedal from './Assets/hiHatPedal.mp3'
import MedTom from './Assets/medTom.mp3'
import SmallTom from './Assets/smallTom.mp3'
import Ride from './Assets/ride.mp3'
import Snare from './Assets/snare.mp3'

function App() {
  

  useEffect(()=>{
  
      window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'k' || e.key.toLowerCase() === ' '  || e.key.toLowerCase() === 'l') {
            let sound = new Audio(Kick)
            sound.play()
        }
        else if(e.key.toLowerCase() === 's'){
            let sound = new Audio(Snare)
            sound.play()
        }else if (e.key.toLowerCase()==='h' && e.shiftKey){
            let sound = new Audio(HiHatClosed)
            sound.play()
        }else if (e.key.toLowerCase()==='h'){
            let sound = new Audio(HiHatOpen)
            sound.play()
        }else if (e.key.toLowerCase() === 'c' || e.key.toLowerCase() ==='y'){
            let sound = new Audio(Crash)
            sound.play()
        }else if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 'j'){
            let sound = new Audio(Ride)
            sound.play()
        }else if (e.key.toLowerCase() === 'q'){
            let sound = new Audio(SmallTom)
            sound.play()
        }else if (e.key.toLowerCase() === 'w'){
            let sound = new Audio(MedTom)
            sound.play()
        }else if (e.key.toLowerCase() === 'e'){
            let sound = new Audio(FloorTom)
            sound.play()
        }else if (e.shiftKey){
            let sound = new Audio(HiHatPedal)
            sound.play()
        }
      })

  },[])

  



  return (
    <div className="App">
      <DrumSet/>
      <Player/>
    </div>
  );
}

export default App;
